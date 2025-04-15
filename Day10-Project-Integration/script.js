const form = document.getElementById("message-form");
const usernameInput = document.getElementById("username");
const contentInput = document.getElementById("content");
const feedback = document.getElementById("form-feedback");
const cardContainer = document.getElementById("card-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const content = contentInput.value.trim();

    if (username === "" || content === "") {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";
        return;
    }
    feedback.textContent = "";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="username">${username}</div>
        <div class="content">${content}</div>
        <button class="delete-btn">Delete</button>
    `;
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        card.remove();
    });
    cardContainer.appendChild(card);
    form.reset();
});

    