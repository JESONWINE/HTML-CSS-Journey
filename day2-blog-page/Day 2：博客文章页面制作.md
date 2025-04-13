## Day 2：博客文章页面制作

### 🧭 学习目标

- 熟悉更多语义化 HTML 标签：`section`, `article`, `header`, `footer`
- 使用段落（`<p>`）、标题（`<h1>~<h3>`）组织结构
- 利用 CSS 控制页面宽度、行高、字体
- 添加图片与配图说明
- 实现内容居中排版、良好的可读性

---

### 📁 文件结构

```
day2-blog-page/
├── index.html
└── styles.css
```

---

### ✍️ HTML 内容（index.html）

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>我的第一篇博客</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>我的第一篇博客</h1>
    <p class="meta">作者：Jason · 发布于 2025年4月12日</p>
  </header>

  <article>
    <section>
      <h2>为什么我开始写博客？</h2>
      <p>
        其实早就想写博客了，但一直没有行动。现在开始学习前端开发，
        我觉得记录自己的学习过程是一种很好的方式。既可以加深理解，也方便复习。
      </p>
    </section>

    <section>
      <h2>学习 HTML 和 CSS 的乐趣</h2>
      <p>
        HTML 就像是在搭积木，CSS 就像给积木上色。写代码的过程让我很有成就感！
        每次把页面写出来，看到浏览器里展示的效果，都让我很开心。
      </p>
      <img src="https://picsum.photos/800/300" alt="学习的配图">
      <p class="caption">图：学习中使用的草图演示</p>
    </section>
  </article>

  <footer>
    <p>© 2025 我的博客 · 欢迎交流与转载</p>
    <button onclick="document.body.style.backgroundColor = '#eef6ff'">
    点我换个心情背景 🎨
  </button>
  <button onclick="document.body.style.backgroundColor = getRandomColor()">
    点我随机换背景 🎲
  </button>
  <script>
    function getRandomColor() {
      const colors = ['#eef6ff', '#fef6e4', '#f0fff0', '#fff0f5', '#f9f9f9'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
      // 🎲 随机背景色说明：
    // 1. 定义一个 colors 数组，包含五种柔和配色
    // 2. 使用 Math.random() 随机挑一个颜色返回
    // 3. 点击按钮后调用此函数，设置为 body 背景色
    // 这样每次点击都会改变网页的气氛！
</script>
</footer>
</body>
</html>
```

---

### 📘 补充说明：`<footer>` 的作用

`<footer>` 是 HTML5 中用于表示**页面底部信息**的语义化标签。它通常包含：

- 作者信息、版权声明
- 联系方式
- 页面导航链接或网站地图
- 法律声明等补充信息

#### ✅ 使用场景：

- 用在整个页面底部，作为网站统一的尾部
- 也可以在 `<article>`、`<section>` 中局部使用，表示某篇内容的结尾补充说明（如文末来源、评论等）

#### 📌 在你的博客中：

```html
<footer>
  <p>© 2025 我的博客 · 欢迎交流与转载</p>
</footer>
```

这个区域表示文章的结尾版权信息，是文章视觉和结构的“收尾”。

#### ✅ 优势：

- 提升结构清晰度和可维护性
- 对搜索引擎友好：搜索引擎会识别这里是附属内容
- 对辅助设备友好：如屏幕阅读器会跳过正文直接朗读 footer

💡 小提示：如果你要加评论区、文章标签、上一篇/下一篇等信息，也可以放在 `<footer>` 中（位于 `<article>` 内部）。

---

### 📘 补充说明：`<header>` 的作用

`<header>` 是 HTML5 中的语义化标签，用来表示页面或模块的“头部区域”，在博客文章中通常用于放置：

- 主标题（如文章标题）
- 作者和发布时间信息
- 有时还包含 logo、导航菜单等（如果是网站的整体 header）

在本页面中：

```html
<header>
  <h1>我的第一篇博客</h1>
  <p class="meta">作者：Jason · 发布于 2025年4月12日</p>
</header>
```

- `<h1>` 的直接父元素是 `<header>`，不是 `<body>`
- 如果 `<h1>` 使用了如 `font-size: 2.5em` 的相对单位，它会相对于 `<header>` 继承的字体大小来计算（例如来自 `body` 的 16px）

#### ✅ 用途总结：

- 告诉浏览器和搜索引擎：这是文章的开头部分
- 结构清晰，不需要额外类名（比 `<div class="header">` 更语义明确）
- 对屏幕阅读器和 SEO 更友好

📌 小贴士：`<header>` 不仅可以出现在 `<body>` 顶部，也可以在 `<article>` 或 `<section>` 中局部使用，表示每一部分的小标题和引导信息。

`<header>` 是 HTML5 中的语义化标签，用来表示页面或模块的“头部区域”，在博客文章中通常用于放置：

- 主标题（如文章标题）
- 作者和发布时间信息
- 有时还包含 logo、导航菜单等（如果是网站的整体 header）

在本页面中，它的作用是：

- 告诉浏览器和搜索引擎：这是文章的开头部分
- 结构清晰，不需要额外类名（比 `<div class="header">` 更语义明确）
- 对屏幕阅读器和 SEO 更友好

📌 小贴士：`<header>` 不仅可以出现在 `<body>` 顶部，也可以在 `<article>` 或 `<section>` 中局部使用，表示每一部分的小标题和引导信息。

---

### 📘 补充说明：`<article>` 和 `<section>` 的作用与区别

#### ✅ `<article>` 是用于表示**独立的完整内容单元**：

它代表一段**可以脱离当前页面单独存在**的内容，比如：

- 博客文章
- 新闻报道
- 用户评论或独立帖子

在本页面中，整篇博客使用 `<article>` 包裹，告诉浏览器“这是一个完整、可独立阅读的内容模块”。

#### ✅ `<section>` 是用于表示**局部内容块或小节**：

用于将页面内容分组，每个小节有自己的主题标题（如 `<h2>`）。它通常出现在文章、网页、功能说明中，帮助结构化组织：

- 每个 `<section>` 包含一个主题（如“为什么我开始写博客”）
- 内含段落、图片等相关内容

#### 🆚 对比总结：

| 标签          | 用途       | 是否独立 | 是否需要标题  |
| ----------- | -------- | ---- | ------- |
| `<article>` | 整体内容模块   | ✅ 是  | 可选      |
| `<section>` | 局部主题内容分组 | ❌ 否  | ✅ 必须有标题 |

💡 最佳实践：

- 外层用 `<article>` 包住整篇文章
- 每个段落主题用 `<section>` 包裹，并配上小标题 `<h2>` 或 `<h3>`
- 如果内容太短或没有标题，建议使用 `<div>` 代替 `<section>` 更合适

---

### 🎨 CSS 样式（styles.css）

```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  max-width: 800px;
  margin: 40px auto; /* 上下边距为 40px，左右设置为 auto，使内容在水平方向自动居中（前提是设置了 max-width） */
  padding: 0 20px; /* 左右内边距为 20px，确保内容不会贴边，给阅读留出呼吸空间 */
  line-height: 1.8; /* 设置行高为字体大小的 1.8 倍，增加行间距，提升可读性 */
}

/* 头部区域 */
header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  color: #222;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.meta {
  color: #666;
  font-size: 0.9em;
}

/* 文章结构 */
article h2 {
  color: #007bff;
  font-size: 1.6em;
  margin-top: 40px;
}

article p {
  margin: 1em 0; /* 段落上下外边距为当前字体大小的 1 倍（1em）；注意：margin 的 em 参考的是元素自身的字体大小 */
  text-align: justify; /* 段落两端对齐：自动调整每行字间距，使左右边对齐，提升排版整洁感 */
}

/* 图片样式 */
img {
  max-width: 100%;
  border-radius: 6px; /* 设置元素四个角的圆角为 6px，让边角略微圆润，提升视觉柔和感 */
  margin: 20px 0;
}

.caption {
  font-size: 0.85em;
  color: #888;
  text-align: center;
}

/* 页脚 */
footer {
  border-top: 1px solid #ddd;
  margin-top: 60px;
  padding-top: 20px;
  text-align: center;
  color: #999;
  font-size: 0.9em;
}
```

---

你现在可以保存 index.html 和 styles.css，然后在浏览器中查看这个博客页面啦！

如果需要我带你继续优化页面或进入 Day 3，随时告诉我～
