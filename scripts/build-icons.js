const fs = require("node:fs");
const glob = require("glob");
const camelcase = require("camelcase");
const uppercamelcase = require("uppercamelcase");
const path = require("node:path");
const cheerio = require("cheerio");

const rootDir = path.join(__dirname, "..");

const assetsFiles = [
  {
    attr: (name) => `/**
         * Remix Icon: ${toTitleCase(name)}
         * @see {@link https://remixicon.com/icon/${name} Remix Icon Docs}
         */`,
    dir: path.join(rootDir, "icons", "remix"),
    id: "remix",
    index: path.join(rootDir, "index.ts"),
    out: ["icon-pack", "remix"],
  },
  {
    attr: (name) => `/**
               * Flags by \`Deji.Zeal\`: ${toTitleCase(name)}
               * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
               */`,
    dir: path.join(rootDir, "icons", "flags"),
    id: "deji.zeal",
    index: path.join(rootDir, "flags.ts"),
    out: ["icon-pack", "flags"],
  },
];

function isNumber(str) {
  return !Number.isNaN(Number(str));
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

assetsFiles.forEach(({ attr, dir, id, index, out }) => {
  glob(`${dir}/**/*.svg`, (_, icons) => {
    fs.writeFileSync(index, "", "utf-8");
    const outDir = path.join(rootDir, ...out);

    icons.forEach(async (i) => {
      const svg = fs.readFileSync(i, "utf-8");
      const name = path.basename(i, ".svg");
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

      let cname = uppercamelcase(name);
      if (isNumber(cname[0])) {
        cname = "Ri" + cname;
      }

      const element = `
        import React, { memo } from 'react'
        import type { IconProps } from '../../types'
        import {
          Svg,
          Circle as _Circle,
          Ellipse,
          G,
          LinearGradient,
          RadialGradient, 
          Line,
          Mask,
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
              .replace(/style="([^:]+):([^"]+)"/g, (_, key, value) => {
                return `style={{
                        ${camelcase(key)}: '${value}'
                      }}`;
              })
              .replace(/fill="currentColor"/g, "fill={color}")
              .replace(/width="\d+"/, "")
              .replace(/height="\d+"/, "")
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
              .replace(/<mask/g, "<Mask")
              .replace(/<\/mask/g, "</Mask")
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
  
        ${attr?.(name)}
        export const ${cname} = memo(Icon)
      `;

      fs.writeFileSync(location, element, "utf-8");

      const exportString = `export { ${cname} } from './${out.join(
        "/"
      )}/${name}'\n`;

      fs.appendFileSync(index, exportString, "utf-8");
    });

    // run biome:
    require("node:child_process").execSync(
      `bunx biome check --write ${outDir} ${index}`,
      {
        stdio: "inherit",
      }
    );
  });
});
