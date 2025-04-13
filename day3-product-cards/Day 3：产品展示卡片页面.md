## Day 3：产品展示卡片页面

### 🧭 学习目标

- 学习 CSS 盒子模型（Box Model）
- 熟悉卡片式布局常用技巧：边框、阴影、内边距、圆角等
- 使用 Flex 布局排列多个卡片
- 添加图片、标题、价格和按钮
- 实现一个干净、可扩展的产品展示区域

---

### 📁 文件结构

```
day3-product-cards/
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
  <title>产品展示</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>精选商品推荐</h1>
    <p class="subtitle">优质生活，从这里开始</p>
  </header>

  <main class="product-container"> <!-- main 是语义化标签，表示网页主要内容区域；此处用于容纳所有产品卡片，class 用于 CSS 控制布局 -->
    <div class="card"> <!-- div 是通用容器标签，用于分组和布局；此处 class="card" 表示这是一个产品卡片，用于应用统一样式 -->
      <img src="https://picsum.photos/300/200?random=1" alt="产品图1">
      <h2>极简笔记本</h2>
      <p class="price">￥199.00</p>
      <button>立即购买</button>
    </div>

    <div class="card">
      <img src="https://picsum.photos/300/200?random=2" alt="产品图2">
      <h2>无线蓝牙耳机</h2>
      <p class="price">￥299.00</p>
      <button>立即购买</button>
    </div>

    <div class="card">
      <img src="https://picsum.photos/300/200?random=3" alt="产品图3">
      <h2>创意水杯</h2>
      <p class="price">￥59.00</p>
      <button>立即购买</button>
    </div>
  </main>
  <script>
    // Day 3 彩蛋：点击按钮弹出购买确认信息

    // 获取所有按钮（立即购买）
    const buttons = document.querySelectorAll('button');

    // 遍历每个按钮，为它们添加点击事件监听器
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // 获取按钮前两个兄弟元素中的 h2 元素的文本（即产品名称）
        // 使用可选链操作符 ?. 获取按钮前两个兄弟元素中的 h2（商品名称）的文本内容
        // 如果某一层为空（如结构被改变），则不抛出错误，返回 undefined
        // 如果获取失败（如找不到 h2），则使用默认值 '该商品'
        const product = btn.previousElementSibling?.previousElementSibling?.textContent || '该商品';

        // 弹出提示框，显示购买信息
        alert(`你已选择购买：${product}，感谢支持！`);
      });
    });
  </script>
</body>
</html>
```

---

### 🎨 CSS 样式（styles.css）

```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  padding: 20px;
  margin: 0;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

.subtitle {
  color: #777;
  font-size: 1em;
  margin-top: -10px; /* 使用负外边距将副标题向上拉近，减小与主标题之间的间距，提升视觉紧凑感 */
}

.product-container { /* 使用 Flex 布局让卡片横向排列；子元素默认一行排列，结合 wrap 实现自动换行，gap 控制间距 */
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 280px;
  padding: 16px;
  text-align: center;
  transition: transform 0.2s; /* 添加过渡动画：当卡片悬停触发 transform 时，0.2 秒内平滑完成位移，提高交互体验 */
}

.card:hover { /* :hover 是伪类，表示鼠标悬停时的样式触发，用于实现交互效果 */
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 12px;
}

.card h2 {
  font-size: 1.2em;
  margin: 10px 0;
}

.price {
  font-size: 1em;
  color: #28a745;
  margin: 8px 0;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 16px; /* 按钮上下内边距为 10px，左右为 16px；如果看起来上下不对称，可能是字体基线或行高造成的视觉偏差 */
  cursor: pointer;
  font-size: 0.95em;
  transition: background-color 0.2s ease; /* 设置按钮背景色变化的过渡动画：持续 0.2 秒，使用 ease（先慢后快再慢）使过渡更自然。鼠标移入和移出时都会触发此动画，使颜色变化平滑 */
}

button:hover {
  background-color: #0056b3;
}
```
