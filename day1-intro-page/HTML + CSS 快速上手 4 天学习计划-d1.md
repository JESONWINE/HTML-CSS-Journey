## HTML + CSS 快速上手 4 天学习计划

### 🗓️ 总览

| 天数     | 项目              | 技术点                   | 成品效果                    |
| ------ | --------------- | --------------------- | ----------------------- |
| Day 1  | 个人介绍网页          | HTML 基本结构 + CSS 样式    | 简洁排版 + 圆角头像 + 兴趣列表      |
| Day 2  | 博客文章页面          | 结构化布局 + 字体排版          | 标题 + 段落 + 图片 + 居中排版     |
| Day 3  | 产品展示卡片          | Box模型 + 图片排版 + 按钮交互   | 产品卡片 + 价格 + 购买按钮        |
| Day 4  | 响应式导航栏          | Flexbox + 菜单 + 响应式布局  | 顶部菜单栏 + hover 效果 + 手机适配 |
| Day 5+ | JavaScript 基础预热 | JS 脚本 + 事件监听 + 动态修改页面 | 点按钮弹窗 + 简单计数器 + 表单验证等   |

---

### 📁 文件结构

```
day1-intro-page/
├── index.html
└── styles.css
```

### ✍️ HTML 内容（index.html）

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>我的个人介绍</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>你好，我是 Jason</h1>
  <img src="https://i.imgur.com/4AiXzf8.jpeg" alt="我的头像" class="avatar">

  <p>我是一位热爱编程和跑步的人，目前在学习前端开发。</p>

  <h2>我的兴趣爱好</h2>
  <ul>
    <li>🏃 跑步</li>
    <li>📚 阅读</li>
    <li>💻 编程</li>
    <li>🎮 游戏</li>
  </ul>

  <p>欢迎来看看我的 <a href="https://github.com" target="_blank">GitHub 页面</a>！</p>

  <button onclick="alert('欢迎来到我的个人介绍页！')">点我一下</button>
</body>
</html>
```

---

### 🎨 CSS 样式（styles.css）

```css
body {
  font-family: "Arial", sans-serif;         /* 设置默认字体为 Arial，如果没有就用系统默认无衬线字体 */
  background-color: #f2f2f2;                 /* 设置初始背景色为浅灰色（后面会被覆盖） */
  color: #333;                               /* 设置默认文字颜色为深灰，视觉更柔和 */
  max-width: 800px;                          /* 页面内容最大宽度为 800 像素，便于居中和阅读 */
  margin: 40px auto;                         /* 上下留白 40px，左右自动（实现页面居中） */
  padding: 20px;                             /* 内边距，让内容不要贴边 */
  border-radius: 10px;                       /* 边角圆滑处理，使视觉更柔和 */
  background-color: white;                  /* 设置页面主要内容区为白色背景，覆盖前面的灰色背景 */
  box-shadow: 0 0 10px rgba(0,0,0,0.1);      /* 添加阴影效果，让内容区有卡片浮起感 */
}

h1 {
  color: #007bff;                            /* 主标题颜色设置为蓝色 */
  text-align: center;                        /* 居中标题 */
}

.avatar {
  display: block;                            /* display: block 将图片变为块级元素。
                                               块级元素（block）特点：
                                               - 独占一行
                                               - 可以设置宽高
                                               - 可以使用 margin、padding 等布局属性
                                               - 常见块级元素有：div、p、h1、ul、li 等
                                               默认图片 <img> 是行内元素（inline），不支持宽高和外边距设置。
                                               所以加上 display: block 后可以像盒子一样控制布局。*/
  width: 150px;                              /* 图片宽度 150px */
  height: 150px;                             /* 图片高度 150px */
  border-radius: 50%;                        /* 使头像呈圆形。50% 表示宽高的 50%，正方形会变圆。 */
  margin: 20px auto;                         /* 上下外边距 20px，左右 auto 让图片居中对齐 */
  border: 3px solid #007bff;                /* 设置头像的边框：
                                               - 边框宽度为 3 像素
                                               - 边框类型为实线（solid）
                                               - 边框颜色为 #007bff（亮蓝色），这也是页面主色调之一，统一风格 */
}

ul {
  line-height: 1.8;                          /* 设置兴趣列表的行高，便于阅读 */
}

a {
  color: #007bff;                            /* 超链接颜色设置为蓝色 */
  text-decoration: none;                    /* 去掉默认下划线 */
}

a:hover {
  text-decoration: underline;               /* 鼠标悬停时显示下划线，增加交互感 */
}
```

---

### ✅ 作业建议

- 修改名字和介绍内容为你自己的
- 替换头像图片链接
- 自己加一个新的兴趣爱好
- 修改背景色或字体样式
- 多加几个按钮试试不同的 JS 弹窗

---

## 📘 补充知识：什么是块级元素（block element）？

HTML 中的元素分为两大类：块级元素（block）和行内元素（inline）。

### ✅ 块级元素的特点：

- **独占一整行**（即使里面内容不满整行）
- **可以设置宽度和高度**
- **可以设置 margin、padding、border**
- 默认会从新的一行开始渲染

### 📌 常见的块级元素：

- `<div>`：通用容器
- `<p>`：段落
- `<h1>` ~ `<h6>`：标题
- `<ul>`, `<ol>`, `<li>`：列表
- `<section>`, `<article>`：语义化结构

### 📌 和它对比：行内元素特点：

- 不独占一行，多个行内元素会排在同一行上
- 不能设置宽高，margin/padding 受限
- 常见如 `<span>`, `<a>`, `<strong>`, `<img>`（默认）

### 💡 所以：

我们在 `.avatar` 中给 `<img>` 加上 `display: block` 是为了让它变成块级元素，从而支持设置宽高、居中、加边框等布局行为。

---

## 📏 补充知识：什么是 px（像素）？

### ✅ px 的定义：

`px` 是 **pixel（像素）** 的缩写，是网页中最常用的长度单位之一。

它表示在屏幕上显示的一个最小点。比如：

- `width: 100px` 就是宽度为 100 个像素
- `font-size: 16px` 表示文字大小为 16 像素

### 💡 注意：

- **1 px 不一定是屏幕上真实的一个点**，而是浏览器根据设备像素比（DPR）进行适配后的视觉单位。
- 在高分辨率屏幕（Retina 屏）上，1px 实际可能由多个物理像素构成，但浏览器会帮你处理这些细节。

### 📐 px 是绝对单位：

和百分比（%）、em、rem 不同，px 是不随父元素或浏览器大小而变化的“绝对单位”。

### 📌 举例说明：

```css
.avatar {
  width: 150px;   /* 图片宽度为 150 像素 */
  height: 150px;  /* 高度同样为 150 像素 */
}
```

这会生成一个正方形图片，浏览器会以你屏幕的显示密度换算成实际显示大小。

### 👁️ 直观类比：

想象你现在用的是笔记本或桌面显示器：

- **100px 的宽度** 大约等于一根成人手指宽度（实际视距和屏幕分辨率不同会略有出入）。
- **16px 的字体** 是网页中最常用的文字大小，通常相当于 Word 默认文字。
- 一个手机屏幕宽度大约是 **375px ~ 430px**，一个典型网页正文区域大概会设置为 **800px** 左右，在大屏显示器中看起来不会太宽。

---

## 🧩 JavaScript 彩蛋（预热）

```html
<button onclick="alert('欢迎来到我的个人介绍页！')">点我一下</button>
```

你可以把它放在 HTML 的末尾，会看到点击按钮弹出提示框，这就是 JavaScript 的基础行为！

---

后续我们将继续 Day 2 博客页面练习，并在第 5 天加入更多 JavaScript 的交互逻辑。
