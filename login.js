document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorBox = document.querySelector('.error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            showError('Please enter both username/email and password.');
            return;
        }

        window.location.href = 'index.html';
    });

    function showError(message) {
        errorBox.textContent = message;
        errorBox.style.display = 'block';
    }
});
