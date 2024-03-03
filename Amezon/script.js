function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

document.getElementById("buyNowButton").addEventListener("click", function () {
    alert("Redirecting to purchase page...");
});

document.getElementById("addToCartButton").addEventListener("click", function () {
    alert("Product added to the cart!");
});

const productWidgets = document.querySelectorAll('.widget');

productWidgets.forEach((widget) => {
    const imageLink = widget.querySelector('a');
    imageLink.addEventListener('click', function (event) {
        event.preventDefault();

        const productPageUrl = imageLink.getAttribute('href');
        window.location.href = productPageUrl;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value; // New
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!/^\d{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }
        signupForm.reset();

        alert("Sign up successful!");
    });
});


