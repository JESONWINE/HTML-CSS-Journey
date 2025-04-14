
#  Day 6：完整页面布局练习

🎯 目标：
- 使用 CSS Grid 构建网页的五区块布局（Header / Sidebar / Main / Aside / Footer）
- 掌握 grid-template-areas 的命名布局技巧
- 响应式适配，适合不同屏幕尺寸

📁 项目结构：
Day6-Layout-Grid/
├── index.html       ← 页面结构
└── styles.css       ← 样式表（CSS Grid）

``` html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day 6 页面布局</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header class="header">
      <div class="logo-title">
        <img src="https://via.placeholder.com/40" alt="Logo" class="logo">
        <h1>我的网站</h1>
      </div>
    </header>
    <nav class="sidebar">
      <ul class="menu">
        <li><a href="#">首页</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">服务项目</a></li>
        <li><a href="#">联系方式</a></li>
      </ul>
    </nav>
    <main class="main">
      <article class="content">
        <h2>欢迎来到我们的网站</h2>
        <p>这是我们的主内容区域。您可以在这里了解我们的服务、阅读博客文章或获取有价值的信息。</p>
        <button class="cta">了解更多</button>
      </article>
    </main>
    <aside class="extra">
      <h3>小贴士</h3>
      <ul class="tips">
        <li>保持页面简洁有序</li>
        <li>使用 Grid 构建灵活布局</li>
        <li>通过响应式适配各种屏幕</li>
      </ul>
    </aside>
    <footer class="footer">
      <p>&copy; 2025 我的公司名称. 保留所有权利。</p>
      <p><a href="#">隐私政策</a> | <a href="#">服务条款</a></p>
    </footer>
  </div>
</body>
</html>
```
``` css
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-bottom: 10px;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.menu a:hover {
  color: #007bff;
}

.sidebar {
  grid-area: sidebar;
  background-color: #e0e0e0;
  padding: 16px;
}

.main {
  grid-area: main;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.extra {
  grid-area: extra;
  background-color: #f0f0f0;
  padding: 16px;
}

.footer {
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 0.9em;
  line-height: 1.6;
}

.footer a {
  color: #ccc;
  text-decoration: none;
  margin: 0 6px;
}

.footer a:hover {
  color: #fff;
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}
.content {
  line-height: 1.6;
}

.content h2 {
  font-size: 1.4em;
  margin-bottom: 10px;
}

.content p {
  margin-bottom: 12px;
}

.cta {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.cta:hover {
  background-color: #0056b3;
}

.extra h3 {
  font-size: 1.1em;
  margin-bottom: 10px;
}

.tips {
  padding-left: 20px;
  line-height: 1.5;
  color: #555;
}

$1@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "extra"
      "footer";
    grid-template-columns: 1fr;
  }
}
```
