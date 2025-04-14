// 点击“点击我”按钮弹出提示
const btns = document.querySelectorAll(".btn");
btns.forEach((btn,index) => {
  btn.addEventListener("click", () => {
    alert(`你点击了第 ${index + 1}张卡片按钮`);
  });
});

const delbtns = document.querySelectorAll(".delete-btn");
delbtns.forEach((btn,index) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card"); // 找到最近的.card元素
    if(card)card.remove(); // 删除卡片
  });
});

const addBtn = document.getElementById('add-card-btn');
const cardContainer = document.querySelector('.card-container');

let count = document.querySelectorAll('.card').length + 1
addBtn.addEventListener('click', () => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>卡片标题 ${count}</h3>
    <p>这是新增的卡片</p>
    <button class="btn">点击我</button>
    <button class="delete-btn">删除</button>
  `;
  cardContainer.appendChild(card);
    // 为新卡片添加点击事件监听器
  card.querySelector('.btn').addEventListener('click', () => {
    alert(`你点击了第 ${count}张卡片按钮`);
  });
  // 为新卡片添加删除按钮事件监听器
  card.querySelector('.delete-btn').addEventListener('click', (e) => {
    const card = e.target.closest(".card"); // 找到最近的.card元素
    if(card)card.remove(); // 删除卡片
  });

  count++;
});
