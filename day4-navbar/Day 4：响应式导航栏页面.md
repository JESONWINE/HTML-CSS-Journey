## Day 4：响应式导航栏页面

### 🧭 学习目标

- 学习如何创建网页的主导航栏
- 使用 `flex` 让导航菜单横向排列并居中或靠右
- 使用 `hover` 效果增强导航链接交互感
- 使用媒体查询（Media Query）实现响应式导航栏（手机端垂直菜单）
- 实现一个 Logo + 菜单结构的完整页面顶部布局

---

### 📁 文件结构

```
day4-navbar/
├── index.html
└── styles.css
```

---

### ✍️ HTML 内容（index.html）

#### 📌 结构说明：

| 元素                                                                 | 用途说明                   |
| ------------------------------------------------------------------ | ---------------------- |
| `<header class="navbar">`                                          | 页面顶部区域，包裹整个导航栏结构       |
| `<div class="logo">`                                               | 左上角 Logo（可以是文字或图片）     |
| `<nav class="menu">`                                               | 包裹导航链接的容器，菜单项横向排列      |
| `<a href="#">...</a>（注意：`#` 表示占位符链接，点击后默认跳转到页面顶部，常用于未设定真实地址的临时链接）` | 每个单独的导航链接，可以跳转到指定页面或锚点 |

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>我的导航栏页面</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="navbar">
    <div class="logo">🌐 MySite</div>
    <button class="menu-toggle">☰</button> <!-- 汉堡按钮：移动端点击展开菜单 -->
    <nav class="menu">
      <a href="#">首页</a>
      <a href="#">关于我们</a>
      <a href="#">服务</a>
      <a href="#">联系我们</a>
    </nav>
  </header>
  <script>
        // Day 4 彩蛋：点击汉堡按钮展开/收起菜单
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');

        // 为菜单按钮添加点击事件
        menuToggle.addEventListener('click', () => {
            // 切换 .active 类名：有则移除，无则添加
            // 用于控制菜单展开/收起的视觉切换
            menu.classList.toggle('active');
        });
  </script>
</body>
</html>
```

---

### 🎨 CSS 样式（styles.css）

```css
/* 默认隐藏菜单按钮（桌面端不显示） */
.menu-toggle {
  display: none;
  font-size: 1.5em;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

/* 顶部导航栏容器 */
.navbar {
  display: flex;                         /* 启用 Flex 布局，横向排列 logo 和菜单 */
  justify-content: space-between;       /* 两端对齐：左侧 logo，右侧菜单 */
  align-items: center;                  /* 垂直居中对齐 */
  padding: 12px 24px;
  background-color: #333;
  color: white;
}

/* logo 样式 */
.logo {
  font-size: 1.5em; /* 设置字体大小为父元素字体大小的 1.5 倍；虽然 .navbar 没有设置 font-size，但浏览器默认 body 字体大小为 16px，因此此处为 24px */
  font-weight: bold;
}

/* 菜单链接容器（桌面端默认横向显示） */
.menu {
  display: flex;
  gap: 20px;
}

.menu.active {
  display: flex;
}

.menu a {
  color: white;
  text-decoration: none;                /* 去掉下划线 */
  font-size: 1em;
  transition: color 0.2s ease;
}

.menu a:hover {
  color: #00c4ff;                        /* 悬停时改变颜色，增强交互反馈 */
}
```

---

### 📱 媒体查询：移动端响应式样式

```css
@media (max-width: 600px) {

  /* 媒体查询：当屏幕宽度小于等于 600px 时应用以下样式 */
  .navbar {
    flex-direction: column;             /* 在小屏幕上改为垂直布局 */
    align-items: flex-start;            /* 左对齐内容 */
  }

  .menu-toggle {
    display: block;             /* 小屏幕上显示汉堡按钮 */
    margin-top: 10px;
  }

  .menu {
    flex-direction: column;              /* 菜单项垂直排列 */
    gap: 10px;                          /* 垂直间距 */
    margin-top: 12px;                   /* 顶部间距 */
    opacity: 0;                         /* 默认隐藏（透明） */
    max-height: 0;                      /* 默认收起高度 */
    overflow: hidden;                   /* 避免展开时内容溢出 */
    pointer-events: none;               /* 避免隐藏状态下可点击 */
    transition: opacity 0.4s ease, max-height 0.4s ease; /* 平滑过渡：展开收起时过渡 opacity 和 max-height */
  }

  .menu.active {
    display: flex;
    opacity: 1;
    max-height: 500px;
    pointer-events: auto;
    opacity: 1;
  }
}
```

---

现在导航栏在小于 600px 的屏幕（如手机）上将自动切换为纵向排列，并点击汉堡按钮可实现平滑展开 ✅
