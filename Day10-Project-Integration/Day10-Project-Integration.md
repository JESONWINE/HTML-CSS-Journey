## 📘 Day 10：小项目整合练习

> 📌 本节目标：将 Day 6~9 所学内容整合，构建一个具备添加 / 验证 / 展示 / 删除功能的交互式页面。

---

### 🎯 项目方向：留言卡片板（留言 + 展示）

- 用户填写留言信息（姓名 + 内容）
- 表单验证：非空 + 提交反馈
- 留言内容将以卡片形式展示
- 每张卡片可单独删除

---

### 📁 项目结构
```
Day10-Project-Integration/
├── index.html       ← 页面结构
├── styles.css       ← 布局 + 卡片样式 + 表单样式
└── script.js        ← 表单验证 + 动态添加卡片 + 删除功能
```

---

准备好我们将逐步构建页面结构、样式、功能逻辑 😄

---

### 🧠 script.js 功能实现：表单验证 + 动态添加卡片 + 删除按钮
```js
const form = document.getElementById('message-form');
const usernameInput = document.getElementById('username');
const contentInput = document.getElementById('content');
const feedback = document.getElementById('form-feedback');
const cardContainer = document.getElementById('card-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const content = contentInput.value.trim();

  if (!username || !content) {
    feedback.textContent = '请填写所有字段！';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = '';

  // 创建卡片元素
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="username">${username}</div>
    <div class="content">${content}</div>
    <button class="delete-btn">删除</button>
  `;

  // 添加删除事件
  const delBtn = card.querySelector('.delete-btn');
  delBtn.addEventListener('click', () => {
    card.remove();
  });

  // 添加卡片到容器
  cardContainer.appendChild(card);

  // 清空表单
  form.reset();
});
```

---

### 🧭 下一步计划：进入 React 起步项目

> ✅ 你已完成 HTML + CSS + JS 整合练习。
> 接下来我们将基于当前项目，使用 React 重构：
>
> - 使用函数组件管理留言卡片（如 CardList、Form）
> - 使用 `useState` 管理留言状态与表单输入
> - 用 JSX 编写结构逻辑，更清晰高效
> - 分离样式与组件结构（可结合模块化 CSS 或 Tailwind）

我们将在新仓库中创建 React 项目并一步步迁移当前功能。

---

### 🎨 styles.css 样式起点
```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  padding: 20px;
}

main {
  max-width: 800px;
  margin: auto;
}

h2 {
  text-align: center;
  color: #333;
}

/* 表单区域样式 */
.form-section form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input, textarea {
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#form-feedback {
  font-size: 0.95em;
  text-align: center;
}

/* 卡片展示区域 */
.card-container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card {
  background-color: #ffffff;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  position: relative; /* 为卡片内的绝对定位元素提供定位上下文，例如右上角的删除按钮 */
}

.card .username {
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
}

.card .content {
  color: #555;
  margin-bottom: 10px;
}

.card button.delete-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  color: #c00;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
}
```

---

### 🧱 HTML 页面结构起点
```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>留言卡片板</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="form-section">
      <h2>留言表单</h2>
      <form id="message-form">
        <input type="text" id="username" placeholder="请输入姓名">
        <textarea id="content" placeholder="请输入留言内容"></textarea>
        <button type="submit">提交留言</button>
        <p id="form-feedback"></p>
      </form>
    </section>

    <section class="cards-section">
      <h2>留言展示区</h2>
      <div class="card-container" id="card-container">
        <!-- 新留言卡片将添加在这里 -->
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```
