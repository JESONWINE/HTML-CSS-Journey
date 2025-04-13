## Day 5：卡片式内容展示页面（使用 CSS Grid）

### 🧭 学习目标

- 使用 CSS Grid 实现响应式卡片网格
- 设计卡片结构：图片、标题、简介、按钮
- 添加悬停动画增强交互
- 利用媒体查询自适应列数（1-2-3列）

---

### 📁 文件结构

```
day5-cards/
├── index.html
└── styles.css
```

---

### ✍️ HTML 内容（index.html）结构草稿

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>产品卡片展示</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="card-grid">
    <div class="card">
      <img src="https://picsum.photos/300/180?random=1" alt="产品图片">
      <h2>极简笔记本</h2>
      <p>一款高性价比的极简风笔记本，适合办公与日常记录。</p>
      <button>了解更多</button>
    </div>

    <div class="card">
      <img src="https://picsum.photos/300/180?random=2" alt="产品图片">
      <h2>无线蓝牙耳机</h2>
      <p>清晰音质、舒适佩戴、长续航，为你带来沉浸式音乐体验。</p>
      <button>立即购买</button>
    </div>

    <div class="card">
      <img src="https://picsum.photos/300/180?random=3" alt="产品图片">
      <h2>创意马克杯</h2>
      <p>设计独特、手感温润，适合送礼或自用。</p>
      <button>查看详情</button>
    </div>
  </main>
  <script>
    // Day 5 彩蛋：点击按钮弹出产品详情提示框
    const buttons = document.querySelectorAll('.card button');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const title = btn.parentElement.querySelector('h2')?.textContent || '该产品';
        alert(`你点击了：${title}，更多详情敬请期待！`);
      });
    });
  </script>
</body>
</html>
```

### 🎨 CSS 样式（styles.css）

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  padding: 20px;
}

.card-grid {
  display: grid;                             /* 启用网格布局 */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* 自动生成列：每列最小 280px，最大可占 1fr；auto-fit 表示自动填充可容纳的列数，实现响应式列数变化 */ /* 自动适应列数 */
  gap: 24px;                                 /* 卡片间距 */
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 12px;
}

.card h2 {
  font-size: 1.2em;
  margin: 10px 0 6px; /* 三值写法：上 10px、左右 0、下 6px，简洁设置外边距 */
}

.card p {
  flex: 1; /* 在垂直 Flex 容器中占据剩余空间，推开按钮，使其靠底部对齐。也保证段落高度灵活延展，有利于卡片高度统一 */
  font-size: 0.95em;
  color: #555;
  line-height: 1.4;
  margin-bottom: 12px;
}

.card button {
  align-self: flex-start;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}

.card button:hover {
  background-color: #0056b3;
}
```

你现在可以保存 `styles.css` 文件并打开页面，会看到卡片自动排成 1~3 列，悬停时卡片轻微浮起，按钮也有动态反馈。如果你想继续添加「卡片点击弹窗」或其他彩蛋，我也可以继续带你做！
