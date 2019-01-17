[![logo](http://pk6meb1tz.bkt.clouddn.com/github-logo.svg)](https://remixicon.com)

[English](./README.md) | 简体中文

Remix Icon 是一套面向设计师和开发者的开源图标库。我们在设计之初将图标风格定义为中性风格，以便适用于各种用户群的项目。与拼凑混搭的图标库不同，Remix Icon 的每一枚图标都是由设计师按照统一规范精心绘制的，并确保每一枚图标在拥有完美像素对齐的基础上风格一致且简洁易读。图标以24x24网格为基准，分为“线性图标”和“面型图标”两种风格。所有的图标均可免费用于个人项目和商业项目，Enjoy it~

[![icon demo](http://pk6meb1tz.bkt.clouddn.com/preview2.svg)](https://remixicon.com)
前往官网查看整套图标库 [remixicon.com](https://remixicon.com).

## 使用说明

### 基本用法
直接在[remixicon.com](https://remixicon.com)点击您想要的图标, 该图标将会以SVG矢量格式进行下载。

> 我们建议设计师小伙伴在需要使用某些图标的时候通过官网搜索下载使用，而不是将一整套图标全部下载放在本地文件夹中进行管理；官网的搜索栏可以帮助您快速定位您想要的图标，而且支持中文关键词搜索，这相比本地文件夹管理图标效率要高很多；最重要的是，官网的图标会持续更新。

SVG本身也是一种图片格式，所以您可以像使用其他格式（如JPG、PNG）的图片文件一样使用SVG文件，例如直接引入的方式：

```
<img height="32" width="32" src="img/admin-fill.svg" />
```

### Webfont 用法

#### 安装引入
> **Note:** 如果您打算通过CDN的方式使用 Remix Icon，可以跳过安装引入这一步。

```
npm install remixicon --save
```

```
import 'remixicon/fonts/remixicon.css'
```
> 入口文件引入CSS

#### CDN引入
如果不打算通过安装的方式使用，可以直接复制下面这行代码到您HTML文档的 &lt;head&gt; 标签中，这样就完成了CDN方式的图标引入。
```
<link href="https://remixicon.com/fonts/remixicon.css" rel="stylesheet">
```

#### 使用
引入Remix Icon图标库后，就可以在web项目中使用了，只要在使用图标的时候将图标名称作为类名就可以了。类名规则：
