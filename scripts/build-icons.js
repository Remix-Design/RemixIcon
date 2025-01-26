const fs = require("node:fs");
const glob = require("glob");
const camelcase = require("camelcase");
const uppercamelcase = require("uppercamelcase");
const path = require("node:path");
const cheerio = require("cheerio");

const rootDir = path.join(__dirname, "..");
const assetsDir = path.join(rootDir, "icons");
const outDir = path.join(rootDir, "icon-pack");
const indexDir = path.join(rootDir, "index.ts");

function isNumber(str) {
  return !isNaN(Number(str));
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

glob(`${assetsDir}/**/*.svg`, (_, icons) => {
  fs.writeFileSync(indexDir, "", "utf-8");

  icons.forEach(async (i) => {
    const svg = fs.readFileSync(i, "utf-8");
    const id = path.basename(i, ".svg");
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const fileName = path.basename(i).replace(".svg", ".tsx");
    const location = path.join(outDir, fileName);

    // Because CSS does not exist on Native platforms
    // We need to duplicate the styles applied to the
    // SVG to its children
    const svgAttribs = $("svg")[0].attribs;
    delete svgAttribs["xmlns"];
    const attribsOfInterest = {};
    Object.keys(svgAttribs).forEach((key) => {
      if (
        ![
          "height",
          "width",
          "viewBox",
          "fill",
          "stroke-width",
          "stroke-linecap",
          "stroke-linejoin",
        ].includes(key)
      ) {
        attribsOfInterest[key] = svgAttribs[key];
      }
    });

    $("*").each((index, el) => {
      Object.keys(el.attribs).forEach((x) => {
        if (x.includes("-")) {
          $(el).attr(camelcase(x), el.attribs[x]).removeAttr(x);
        }
        if (x === "fill") {
          $(el).attr(x, "currentColor");
        }
      });

      // For every element that is NOT svg ...
      if (el.name !== "svg") {
        Object.keys(attribsOfInterest).forEach((key) => {
          $(el).attr(camelcase(key), attribsOfInterest[key]);
        });
      }

      if (el.name === "svg") {
        $(el).attr("otherProps", "...");
      }
    });

    let cname = uppercamelcase(id);
    if (isNumber(cname[0])) {
      cname = "Ri" + cname;
    }

    const element = `
      import React, { memo } from 'react'
      import type { IconProps } from '../types'
      import {
        Svg,
        Circle as _Circle,
        Ellipse,
        G,
        LinearGradient,
        RadialGradient, 
        Line,
        Path,
        Polygon,
        Polyline,
        Rect,
        Symbol,
        Text as _Text,
        Use,
        Defs,
        Stop,
        ClipPath
      } from 'react-native-svg'

      const Icon = (props: IconProps) => {
        const { color = 'black', size = 24, ...otherProps } = props
        return (
          ${$("svg")
            .toString()
            .replace(/ class=\"[^\"]+\"/g, "")
            .replace(/ version=\"[^\"]+\"/g, "")
            .replace(/fill="currentColor"/g, "fill={color}")
            .replace('width="24"', "width={size}")
            .replace('height="24"', "height={size}")
            .replace(
              'otherProps="..."',
              "height={size} width={size}  {...otherProps}"
            )
            .replace("<svg", "<Svg")
            .replace("</svg", "</Svg")
            .replace(/<circle/g, "<_Circle")
            .replace(/<\/circle/g, "</_Circle")
            .replace(/<clipPath/g, "<ClipPath")
            .replace(/<\/clipPath/g, "</ClipPath")
            .replace(/<ellipse/g, "<Ellipse")
            .replace(/<\/ellipse/g, "</Ellipse")
            .replace(/<g/g, "<G")
            .replace(/<\/g/g, "</G")
            .replace(/<linear-gradient/g, "<LinearGradient")
            .replace(/<\/linear-gradient/g, "</LinearGradient")
            .replace(/<radial-gradient/g, "<RadialGradient")
            .replace(/<\/radial-gradient/g, "</RadialGradient")
            .replace(/<path/g, "<Path")
            .replace(/<\/path/g, "</Path")
            .replace(/<line/g, "<Line")
            .replace(/<\/line/g, "</Line")
            .replace(/<polygon/g, "<Polygon")
            .replace(/<\/polygon/g, "</Polygon")
            .replace(/<polyline/g, "<Polyline")
            .replace(/<\/polyline/g, "</Polyline")
            .replace(/<rect/g, "<Rect")
            .replace(/<\/rect/g, "</Rect")
            .replace(/<symbol/g, "<Symbol")
            .replace(/<\/symbol/g, "</Symbol")
            .replace(/<text/g, "<_Text")
            .replace(/<\/text/g, "</_Text")
            .replace(/<use/g, "<Use")
            .replace(/<\/use/g, "</Use")
            .replace(/<defs/g, "<Defs")
            .replace(/<\/defs/g, "</Defs")
            .replace(/<stop/g, "<Stop")
            .replace(/<\/stop/g, "</Stop")
            .replace(/px/g, "")}
          )
        }

      Icon.displayName = '${cname}'

      /**
       * Remix Icon: ${toTitleCase(id)}
       * @see {@link https://remixicon.com/icon/${id} Remix Icon Docs}
       */
      export const ${cname} = memo(Icon)
    `;

    fs.writeFileSync(location, element, "utf-8");

    const exportString = `export { ${cname} } from './icon-pack/${id}'\n`;

    fs.appendFileSync(indexDir, exportString, "utf-8");
  });

  // run biome:
  require("child_process").execSync(
    `npx biome check --write icon-pack index.ts`,
    {
      stdio: "inherit",
    }
  );
});
