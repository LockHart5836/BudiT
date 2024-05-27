// login.js
document.getElementById('goBackBtn').addEventListener('click', function() {
    // Navigate back to the previous page
    location.href= "../index.html";
});

// ==== LOADING SCREEN
let spinner = document.querySelector('.loader-overlay');

window.addEventListener('load', () => {
  spinner.parentElement.removeChild(spinner);
});


document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.querySelector(".sign-in-htm form");
    const signUpForm = document.querySelector(".sign-up-htm form");

    // Event listener for sign-in form submission
    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = signInForm.querySelector("#user").value;
        const password = signInForm.querySelector("#pass").value;
        signIn(username, password);
    });

    // Event listener for sign-up form submission
    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = signUpForm.querySelector("#user").value;
        const password = signUpForm.querySelector("#pass").value;
        const repeatPassword = signUpForm.querySelector("#pass-repeat").value;
        const email = signUpForm.querySelector("#email").value;
        signUp(username, password, repeatPassword, email);
    });

    function signIn(username, password) {
        // Check if the user exists in local storage
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = storedUsers.find(u => u.username === username && u.password === password);
        if (user) {
            alert("Login successful!");
            // Redirect to dashboard.html after successful login
            window.location.href = "../pages/dashboard.html";
        } else {
            alert("Invalid username or password!");
        }
    }    

    function signUp(username, password, repeatPassword, email) {
        // Check if passwords match
        if (password !== repeatPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Check if username is already taken
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        if (storedUsers.some(u => u.username === username)) {
            alert("Username already taken!");
            return;
        }
        // Store new user in local storage
        const newUser = { username, password, email };
        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        alert("Sign up successful!");
        // Redirect to login page or perform further actions
    }

});
