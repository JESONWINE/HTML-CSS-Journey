## 📘 Day 9：表单验证与交互反馈

> 📌 本节目标：学习表单结构与基本验证方法，掌握 JS 获取用户输入、验证格式、给出反馈等常见逻辑。

### 🎯 学习目标
- 构建注册 / 留言等表单结构
- 获取输入值并进行非空检查
- 验证常见字段格式（如邮箱）
- 提交时给出成功或错误提示

---

### 📁 项目结构
```
Day9-Form-Validation/
├── index.html       ← 表单页面结构
├── styles.css       ← 基础样式 + 错误提示样式
└── script.js        ← 验证逻辑与反馈提示
```

---

### 🧱 HTML 表单结构示例
```html
<!-- 表单容器，id 用于 JS 获取 -->
<form id="contact-form">
  <!-- 姓名输入框：单行文本 -->
  <label>
    姓名：
    <input type="text" id="name" /> <!-- id 让 JS 可获取该元素 -->
  </label>

  <!-- 邮箱输入框：带格式校验 -->
  <label>
    邮箱：
    <input type="email" id="email" /> <!-- type=email 浏览器可验证邮箱格式 -->
  </label>

  <!-- 留言输入框：多行文本区域 -->
  <label>
    留言：
    <textarea id="message"></textarea>
  </label>

  <!-- 提交按钮：触发表单提交事件 -->
  <button type="submit">提交</button>

  <!-- 提示反馈区域，用于显示错误或成功消息 -->
  <p id="feedback"></p>
</form>
```

---

### 💻 JavaScript 示例：基本验证逻辑（含错误高亮）
```js
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // 阻止表单刷新页面默认行为

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = '请填写所有字段！';
    feedback.style.color = 'red';

    // 添加错误样式：空字段加上 .error 类
    [nameInput, emailInput, messageInput].forEach(input => {
      if (!input.value.trim()) input.classList.add('error');
      else input.classList.remove('error');
    });

    return;
  }

  const emailPattern = /\S+@\S+\.\S+/; // 简易邮箱格式验证：非空+@+非空+.非空（例如 user@example.com）
  if (!emailPattern.test(email)) {
    feedback.textContent = '请输入有效的邮箱地址';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = '提交成功！';
  [nameInput, emailInput, messageInput].forEach(input => input.classList.remove('error'));
  feedback.style.color = 'green';

  // 可选清空表单：
  form.reset();
});
```

---

准备好后我们可以逐步补充样式、验证逻辑或做进一步交互增强 😄

---

### 🎨 CSS 示例：错误高亮样式
```css
.error {
  border: 2px solid red;
  background-color: #fff5f5;
}
```

