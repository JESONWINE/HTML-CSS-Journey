## 📘 Day 8：卡片交互（正式引入 JavaScript）

### 📁 项目结构
```
Day8-JS-Interactions/
├── index.html       ← 页面结构（含按钮）
├── styles.css       ← 样式表（按钮样式等）
└── script.js        ← JavaScript 行为脚本
```

> 📌 本节目标：掌握 JavaScript 的基本 DOM 操作与事件绑定，为后续动态组件开发做准备。

### 🎯 学习目标
- 使用 JS 选择元素、添加事件监听器
- 动态操作 DOM（添加 / 删除 / 修改）
- 点击按钮执行交互行为（alert、修改样式）

---

### 🧱 HTML 示例结构（含按钮）

#### ✅ 如何引入外部 JS 文件
在 HTML 文件的底部（`</body>` 之前）添加如下代码：
```html
<script src="script.js"></script>
```
这将加载 `Day8-JS-Interactions/script.js` 中的所有 JavaScript 代码。

👉 确保你把所有 JS 逻辑（如按钮事件、卡片操作）都写在 `script.js` 文件中，而不是 `<script>` 标签内。
```html
<section class="card-container">
  <div class="card">
    <h3>卡片标题 1</h3>
    <p>描述信息</p>
    <button class="btn">点击我</button>
  </div>
</section>
```

### 🧠 JavaScript 示例：添加点击事件
```js
document.querySelectorAll('.btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    alert(`你点击了第 ${index + 1} 张卡片按钮`);
  });
});
```

### ✅ 示例 2：点击按钮删除该卡片

#### HTML 示例：每张卡片含删除按钮
```html
<div class="card">
  <h3>卡片标题</h3>
  <p>描述内容</p>
  <button class="delete-btn">删除</button>
</div>
```

#### JS 示例：点击删除
```js
document.querySelectorAll('.delete-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');  // 从 e.target（被点击的按钮）向上查找最近的 .card 元素  // 从按钮开始向上寻找最近的 .card 容器（最近的父元素）
    if (card) {
      card.remove();
    }
  });
});
```

#### CSS 建议：删除按钮样式
```css
.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.delete-btn:hover {
  background-color: #c82333;
}
```

---

### 🧾 index.html 文件模板
```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day 8 卡片交互</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section class="card-container">
    <div class="card">
      <h3>卡片标题 1</h3>
      <p>描述信息</p>
      <button class="btn">点击我</button>
      <button class="delete-btn">删除</button>
    </div>
    <div class="card">
      <h3>卡片标题 2</h3>
      <p>另一张卡片</p>
      <button class="btn">点击我</button>
      <button class="delete-btn">删除</button>
    </div>
  </section>

  <!-- 引入 JS 文件 -->
  <script src="script.js"></script>
</body>
</html>
```

### 💻 script.js 示例逻辑

#### 📘 小知识：let / const / var 区别
| 关键字  | 能否重新赋值 | 作用域类型 | 是否推荐使用 |
|----------|----------------|-------------|----------------|
| `var`    | ✅ 可以        | 函数作用域   | ❌（不推荐）     |
| `let`    | ✅ 可以        | 块级作用域   | ✅ 推荐        |
| `const`  | ❌ 不可变      | 块级作用域   | ✅ 推荐（声明常量）|

- `let` 就像 Java 中的 `int` 一样用于声明变量，但它有更安全的作用域限制
- `const` 用于声明不会被修改的常量（如按钮、容器元素）
- 不推荐再使用 `var`，因为它会提升（变量提前生效）并且作用域不安全


> 📌 注意：JavaScript 的 DOM 操作只作用于“当前浏览器页面中的结构”，并不会修改你的 index.html 文件内容。
>
> ✅ 如果你刷新页面，之前删除的卡片还会重新出现 —— 因为原始 HTML 文件没有被真正更改。
>
> 若要保存变动，需通过本地存储、数据库、或 React 等框架配合状态管理来实现。
```js
// 点击“点击我”按钮弹出提示
const btns = document.querySelectorAll('.btn');
btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    alert(`你点击了第 ${index + 1} 张卡片按钮`);
  });
});

// 点击“删除”按钮移除卡片
// e 是事件对象（event），包含这次点击事件的所有信息
const delBtns = document.querySelectorAll('.delete-btn');
delBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) card.remove();  // 如果找到了对应的 .card 容器，才执行删除，防止报错（防御性写法）
  });
});
```

---

### ✅ 示例 3：点击新增卡片按钮添加新卡片

#### HTML：添加一个“新增卡片”按钮
```html
<button id="add-card-btn">新增卡片</button>
<section class="card-container">
  <!-- 原有卡片放这里 -->
</section>
```

#### JS：动态添加卡片
```js
const addBtn = document.getElementById('add-card-btn');
const container = document.querySelector('.card-container');

let count = document.querySelectorAll('.card').length + 1; // 自动获取页面已有卡片数，保证新增编号连续 // 声明变量 count（用于生成卡片编号），类似于 Java 中的 int，只不过 let 是 JavaScript 的变量声明方式

addBtn.addEventListener('click', () => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>卡片标题 ${count}</h3>
    <p>这是新增的卡片</p>
    <button class="btn">点击我</button>
    <button class="delete-btn">删除</button>
  `;
  container.appendChild(card);

  // 为新增按钮绑定事件
  card.querySelector('.btn').addEventListener('click', () => {
    alert(`你点击了第 ${count} 张卡片按钮`);
  });
  card.querySelector('.delete-btn').addEventListener('click', (e) => {
    const targetCard = e.target.closest('.card');
    if (targetCard) targetCard.remove();
  });

  count++;
});
```

---

### 🧠 小知识：动态创建元素不会自动继承旧事件
> 当你使用 JavaScript `createElement()` 新增卡片时，它不会自动拥有原先用 `querySelectorAll().forEach(...)` 绑定的点击事件。
>
> ✅ 解决方法：你需要在 **新增卡片的同时，手动为其绑定事件监听器**。
>
> 🔁 高级技巧（可选）：你可以使用事件委托（event delegation）在 `.card-container` 上监听所有点击事件，并通过 `e.target` 判断目标按钮类型，这样可以让所有未来生成的元素自动响应。

---

### 💡 延伸练习建议
- 点击后改变背景色或隐藏卡片
- 动态添加新卡片（createElement + appendChild）
- 鼠标移入 / 离开事件 hover 效果

准备好我们可以开始动手写交互啦 😄
