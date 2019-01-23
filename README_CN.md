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

```html
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

```html
<link href="https://remixicon.com/fonts/remixicon.css" rel="stylesheet">
```

#### 使用
引入Remix Icon图标库后，就可以在web项目中使用了，只要在使用图标的时候将图标名称作为类名就可以了。类名规则：remixicon-{name}-{style}

```html
<i class="remixicon-admin-line"></i>
<i class="remixicon-admin-fill"></i>
```

> **Note:** 您可以到官网 [remixicon.com](https://remixicon.com) 查阅图标对应的名称，然后在名称后添加图标风格，`-line` 代表线性风格，`-fill`代表面型风格。

### SVG Sprite用法
下载 [`remixicon.symbol.svg`](http://remixicon.com/fonts/remixicon.symbol.svg) 并添加到您的项目目录中，通过 `<use>` 标签来引用图标，例如：

```css
.remix {
  width: 24px;
  height: 24px;
  fill: #333;
}
```

```html
<svg class='remix'>
  <use xlink:href="path/remixicon.symbol.svg#remixicon-admin-fill"></use>
</svg>
```

> **Note:** 上面示例中 `#` 后面的`remixicon-admin-fill`可以替换为任何 Remix Icon 图标名称，您可以到官网 [remixicon.com](https://remixicon.com) 查阅图标对应的名称，然后在名称后添加图标风格，`-line` 代表线性风格，`-fill` 代表面型风格。

## 协作共建
> **Note:** 为了保证每一枚图标的质量，现阶段我们还不接受第三方小伙伴绘制的图标。如果您想要向 Remix Icon 贡献自己设计的图标，请创建一个[issue](https://github.com/Remix-Design/remixicon/issues)来提交自己的图标设计，并在issue详情中附上图标的截图或者图标的下载地址，我们会按照 Remix Icon图标风格规范进行审核，通过后将会添加到图标库中，并在更新日志中署上作者的ID。

### 图标申请
如果图标库中缺少某个适合您业务场景的图标，您可以通过创建[issue](https://github.com/Remix-Design/remixicon/issues)的方式进行申请，issue标题格式为：Icon request: <图标名称>，并完善issue模板中的相应信息。感谢您提出图标申请，这也是帮助我们完善图标库的一种协作共建方式。

## 协议许可
Remix Icon 使用的是 [Apache License Version 2.0](https://github.com/Remix-Design/remixicon/blob/master/License)开源协议。请放行使用和分享本图标库，您可以查看协议详情来了解详细的开源策略。如果您能在您的产品介绍中署名 Remix Icon，我们将会非常感激，但这并不是必须的。唯一需要注意的是，您不能二次销售本图标库中的图标，否则我们会进行追究。
