## 📘 Day 7：响应式卡片展示（Flex + Media Queries）

> 📌 本阶段目标：为学习 React 框架打好 HTML / CSS / JS 前置基础

### 🎯 学习目标
- 使用 Flexbox 构建可横向排列的卡片
- 通过媒体查询实现响应式适配（不同屏幕宽度自动调整卡片数量）
- 增强卡片的排版、阴影与按钮交互效果

### 📁 项目结构
```
Day7-Responsive-Cards/
├── index.html       ← 页面结构
└── styles.css       ← 样式表（使用 Flex 布局）
```

### 🧱 页面结构（HTML 示例）

> ℹ️ 小知识：section / div / main 有什么区别？
>
> | 标签     | 是否有语义 | 常见用途                             |
> |----------|-------------|--------------------------------------|
> | `div`    | ❌ 无语义   | 万能容器，用于布局、包裹任意内容      |
> | `section`| ✅ 有语义   | 表示页面中一个“独立的内容模块”，适合带标题的小区域 |
> | `main`   | ✅ 有语义   | 表示页面中最主要的核心内容，仅用一次    |
>
> ✅ 建议：如果某个内容区域可以拥有自己的标题，就用 `section`；整个页面的主体用 `main`；否则用 `div` 即可。


#### ✅ 卡片结构片段
```html
<section class="card-container">
  <div class="card">
    <h3>卡片标题 1</h3>
    <p>这是一张卡片的内容区域，简洁直观。</p>
  </div>
  <div class="card">
    <h3>卡片标题 2</h3>
    <p>另一张卡片展示，适配不同屏幕。</p>
  </div>
  <div class="card">
    <h3>卡片标题 3</h3>
    <p>继续添加内容，布局自动调整。</p>
  </div>
</section>
```

#### ✅ 完整 HTML 页面结构示例
```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day 7 响应式卡片</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section class="card-container">
    <div class="card">
      <h3>卡片标题 1</h3>
      <p>这是一张卡片的内容区域，简洁直观。</p>
    </div>
    <div class="card">
      <h3>卡片标题 2</h3>
      <p>另一张卡片展示，适配不同屏幕。</p>
    </div>
    <div class="card">
      <h3>卡片标题 3</h3>
      <p>继续添加内容，布局自动调整。</p>
    </div>
  </section>
</body>
</html>
```

### 🎨 样式结构（styles.css）
```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.card {
  /* 卡片样式，包括圆角、阴影、宽度和动画 */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);  /* 阴影：X=0、Y=2px、模糊8px、10%黑色半透明，提升立体感 */
  padding: 20px;
  width: 300px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-top: 0;
}

.card p {
  color: #555;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
```

---

## 🧭 后续课程安排：Day 8 起正式加入 JavaScript

### ✅ Day 8：卡片交互（正式引入 JavaScript）
- 使用 JS 添加、删除卡片
- 点击按钮改变样式、添加事件监听器

### ✅ Day 9：表单验证与交互
- 创建留言/注册表单
- 实现输入校验 + 提交反馈

### ✅ Day 10：小项目整合练习
- 任务列表 / 博客管理 / 产品展示
- 增删改查（CRUD 简易功能）

### 🎁 Bonus（可选扩展）
- CSS 动画、Hover 动效
- JS 获取 JSON 渲染卡片（Fetch）
- 本地存储 LocalStorage

> 从 Day 8 起，JavaScript 将和 HTML/CSS 一起使用，用于实现真实交互行为。
