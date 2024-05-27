const users = JSON.parse(localStorage.getItem('users')) || {};

function saveUser(username, password, email) {
    users[username] = { password, email };
    localStorage.setItem('users', JSON.stringify(users));
}

function login(username, password) {
    if (users[username] && users[username].password === password) {
        localStorage.setItem('currentUser', username);
        window.location.href = '../dashboard/dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}

function signUp(username, password, email) {
    if (users[username]) {
        alert('Username already exists');
    } else {
        saveUser(username, password, email);
        alert('Sign up successful, please log in');
        document.getElementById('tab-1').checked = true;
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');

    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('user').value;
        const password = document.getElementById('pass').value;
        login(username, password);
    });

    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-user').value;
        const password = document.getElementById('signup-pass').value;
        const repeatPassword = document.getElementById('repeat-pass').value;
        const email = document.getElementById('signup-email').value;

        if (password !== repeatPassword) {
            alert('Passwords do not match');
            return;
        }

        signUp(username, password, email);
    });

    document.getElementById('goBackBtn').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});
