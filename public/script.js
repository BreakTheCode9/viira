document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.getElementById("login-link");
    const loginSection = document.getElementById("login");

    if (loginLink && loginSection) {
        loginLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            loginSection.style.display = "block"; // Show login section
        });
    } else {
        console.error("Login link or login section not found.");
    }

    // Function to handle registration form submission
    document.getElementById("registration-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        if (validateRegistrationForm()) {
            registerUser(); // Call registerUser function if form is valid
        }
    });

    // Function to handle login form submission
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        loginUser(); // Call loginUser function
    });

    // Function to validate registration form fields
    function validateRegistrationForm() {
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm-password");
        let isValid = true;

        // Validate first name
        if (firstName.value.trim() === "") {
            displayError(firstName, "Please enter your first name.");
            isValid = false;
        } else if (/\d/.test(firstName.value)) {
            displayError(firstName, "Name cannot contain numbers.");
            isValid = false;
        } else {
            removeError(firstName);
        }

        // Validate last name
        if (lastName.value.trim() === "") {
            displayError(lastName, "Please enter your last name.");
            isValid = false;
        } else if (/\d/.test(lastName.value)) {
            displayError(lastName, "Name cannot contain numbers.");
            isValid = false;
        } else {
            removeError(lastName);
        }

        // Validate email
        if (email.value.trim() === "") {
            displayError(email, "Please enter your email.");
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            displayError(email, "Please enter a valid email address.");
            isValid = false;
        } else {
            removeError(email);
        }

        // Validate phone number
        if (phone.value.trim() === "") {
            displayError(phone, "Please enter your phone number.");
            isValid = false;
        } else if (!isValidPhoneNumber(phone.value.trim())) {
            displayError(phone, "Please enter a valid phone number.");
            isValid = false;
        } else {
            removeError(phone);
        }

        // Validate password
        if (password.value.trim() === "") {
            displayError(password, "Please enter a password.");
            isValid = false;
        } else if (password.value.trim().length < 8) {
            displayError(password, "Password must be at least 8 characters long.");
            isValid = false;
        } else {
            removeError(password);
        }

        // Validate confirm password
        if (confirmPassword.value.trim() === "") {
            displayError(confirmPassword, "Please confirm your password.");
            isValid = false;
        } else if (confirmPassword.value.trim() !== password.value.trim()) {
            displayError(confirmPassword, "Passwords do not match.");
            isValid = false;
        } else {
            removeError(confirmPassword);
        }

        return isValid;
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number format
    function isValidPhoneNumber(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    // Function to display error message
    function displayError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector(".error-message");
        errorMessage.textContent = message;
        formGroup.classList.add("error");
    }

    // Function to remove error message
    function removeError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove("error");
    }

    // Function to handle registration
    function registerUser() {
        // Implement your registration logic here
        console.log("User registered successfully!");
    }

    // Function to handle login
    function loginUser() {
        // Implement your login logic here
        console.log("User logged in successfully!");
    }
});
