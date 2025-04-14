const form = document.getElementById('contract-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const feedback = document.getElementById('feedback');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for demonstration purposes
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
        feedback.textContent = 'Please fill in all fields.';
        feedback.style.color = 'red';
        [nameInput, emailInput, messageInput].forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.style.color = 'red';
        return;
    }
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.color = 'green';
});
