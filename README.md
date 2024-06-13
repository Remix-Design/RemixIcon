[![logo](./.github/files/logo-github.svg)](https://remixicon.com)

[![npm](https://img.shields.io/npm/v/remixicon.svg?labelColor=4A4A4A&color=006AFF&style=flat-square)](https://www.npmjs.com/package/remixicon)
[![downloads](https://img.shields.io/npm/dt/remixicon.svg?labelColor=4A4A4A&color=23AF5F&style=flat-square)](https://www.npmjs.com/package/remixicon)
[![](https://data.jsdelivr.com/v1/package/npm/remixicon/badge)](https://www.jsdelivr.com/package/npm/remixicon)
[![donate](https://img.shields.io/badge/-Donate-DA6429.svg?style=flat-square)](https://remixicon.com/support-us)

[![Sponsor](./.github/files/streamline.svg)](https://go.streamlinehq.com/remix-github)



English | [简体中文](./README_CN.md)

Remix Icon is a set of open-source neutral-style system symbols for designers and developers. Unlike a patchwork icon library, 2800+ icons are all elaborately crafted so that they are born with the genes of readability, consistency, and perfect pixels. Each icon was designed in "Outlined" and "Filled" styles based on a 24x24 grid. Of course, all the icons are free for both personal and commercial use.

[![icon demo](./.github/files/preview.svg)](https://remixicon.com)
View the full set of Remix Icons at [remixicon.com](https://remixicon.com).

## Usage

### Basic Usage

Just click the icons you want from [remixicon.com](https://remixicon.com), and then you can download the icons in SVG or PNG format.

Designers can click the `Copy SVG` button and then press `⌘+V` or `Ctrl+V` to paste the vector graphic into your design tool directly, it is easy and simple.

> We recommend that designers download or copy icons from our website when needed instead of managing all of them in a local folder. The website's search engine allows you to quickly locate the icon you are looking for and the icons on the website are being continuously updated.
>
> The `Copy SVG` now supports Sketch, Figma, Adobe XD, Adobe Illustrator, Affinity Designer, Affinity Photo, etc.

Using SVG on the web is as simple as JPEG or PNG. Such as:

```html
<img height="32" width="32" src="img/admin-fill.svg" />
```

### Webfont Usage

> **Note:** You can import Remix Icon with npm install, cdn or download it manually.

#### Installation

> **Note:** If you'd like to use Remix Icon with a CDN, you can skip this installation step.

```
npm install remixicon --save
```

```
import 'remixicon/fonts/remixicon.css'
```

> import CSS to your main.js

#### CDN

Copy the following code and add it to the &lt;head&gt; tag of your HTML document.

```html
<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
    rel="stylesheet"
/>
```

> The `@4.3.0` in the CDN link can be changed to any history version we've published.

#### Download Manually

Download [`remixicon.css`](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css) file, and add it to the &lt;head&gt; tag of your HTML document.

#### Use

Add icon with class name, class name rule: ri-{name}-{style}

```html
<i class="ri-admin-line"></i>
<i class="ri-admin-fill"></i>
```

> **Note:** We changed the class name prefixes from `remixicon-` to `ri` from v2.0.0;

> **Note:** You can go to [remixicon.com](https://remixicon.com) to check the name of the icons. `-line` means the outlined style icon, and `-fill` means the filled style icon.

#### Sizing

RemixIcon can be resized by CSS class integrated by `remixicon.css` . Icons inherit the `font-size` of their parent container and with the following classes, you can increase or decrease the size of icons relative to that inherited `font-size`. You can also use `ri-fw` class for a fixed width for icons. For example:

```html
<div style="font-size: 24px;">
  <i class="ri-admin-line ri-fw"></i> <!-- fixed width -->
  <i class="ri-admin-line ri-xxs"></i> <!-- 0.5em -->
  <i class="ri-admin-line ri-xs"></i> <!-- 0.75em -->
  <i class="ri-admin-line ri-sm"></i> <!-- 0.875em -->
  <i class="ri-admin-line ri-1x"></i> <!-- 1em -->
  <i class="ri-admin-line ri-lg"></i> <!-- 1.3333em -->
  <i class="ri-admin-line ri-xl"></i> <!-- 1.5em -->
  <i class="ri-admin-line ri-2x"></i> <!-- 2em -->
  <i class="ri-admin-line ri-3x"></i> <!-- 3em -->
  ...
  <i class="ri-admin-line ri-10x"></i> <!-- 10em -->
</div>
```

> You can check the [`remixicon.css`](https://github.com/Remix-Design/RemixIcon/blob/master/fonts/remixicon.css) file for more info and details.

### SVG Sprite Usage

Download [`remixicon.symbol.svg`](https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.symbol.svg) file into your project directory, use icons with the `<use>` element, such as:

```html
<svg class="remix">
    <use xlink:href="your-path/remixicon.symbol.svg#ri-admin-fill"></use>
</svg>
```

```css
.remix {
    width: 24px;
    height: 24px;
    fill: #333;
}
```

> **Note:** `ri-admin-fill` after the `#` in the above example can be replaced with any valid icon name of Remix Icon. You can go to [remixicon.com](https://remixicon.com) to check the name of the icons. `-line` means the outlined style icon, and `-fill` means the filled style icon.

### React

#### Installation

```bash
npm install @remixicon/react
# or
yarn add @remixicon/react
# or
pnpm install @remixicon/react
```

#### Usage

```jsx
import { RiHeartFill } from "@remixicon/react";

const MyComponent = () => {
    return (
        <RiHeartFill
            size={36} // set custom `width` and `height`
            color="red" // set `fill` color
            className="my-icon" // add custom class name
        />
    );
};
```

### Vue 3

#### Installation

```bash
npm install @remixicon/vue
# or
yarn add @remixicon/vue
# or
pnpm install @remixicon/vue
```

#### Usage

```vue
<script setup lang="ts">
import { RiHeartFill } from "@remixicon/vue";
</script>

<template>
    <RiHeartFill size="36px" color="red" className="my-icon" />
</template>
```

### Figma

[RemixIcon Official Plugin.](https://www.figma.com/community/plugin/1089569154784319246/remixicon)

## Contributing

> **Note:** In order to ensure the quality of each icon, we currently do not accept third-party drawn icons. If you want to contribute an icon to Remix Icon, you can create an [issue](https://github.com/Remix-Design/remixicon/issues) with a screenshot or URL to your svg-format file. If you are not familiar with GitHub, you can also email us directly `jimmy@remixdesign.cn`.

### Icon Request

If there is no suitable icon for your usage scenario, you can create an [issue](https://github.com/Remix-Design/remixicon/issues) with the title of "Icon request: `<Icon name>`" and fill in the issue template.

> RemixIcon is mainly focused on user interface icons. If we did not include the logo icons you were looking for, I recommend this icon library - [Simple Icons](https://github.com/simple-icons/simple-icons)

### Icon Search Keywords

We use [`tags.json`](https://github.com/Remix-Design/remixicon/blob/master/tags.json) file to manage the search keywords of our [website](https://remixicon.com). But at the moment, we don't have a good automatic method to complete the keywords for each icon. So we hope you can help us to improve the `tags.json` file by creating [issues](https://github.com/Remix-Design/remixicon/issues), sending emails, or "pull request" of tags.json file to make the search engine better. Especially when one of our icons matches your scene but you don't find the icon with your keywords.

## Sub-projects

[RemixIcon-Slides](https://github.com/Remix-Design/RemixIcon-Slides) PowerPoint and Keynote version of Remix Icon.

## License

Remix Icon is based on the [Apache License Version 2.0](https://github.com/Remix-Design/remixicon/blob/master/License) license. Feel free to use these icons in your products and distribute them. We would be very grateful if you mentioned "Remix Icon" in your product info, but it's not required. The only thing we ask is that these icons are not for sale.

## Support Us

It's simple and easy. Just star our project and recommend it to your friends. Your encouragement is the greatest fuel to drive us forward.

## Follow Us on X

We are all newcomers on X / Twitter. Feel free to follow us and help enhance our visibility.

Designer: https://twitter.com/woaichidapi

Developer: https://twitter.com/wendygaoyuan
