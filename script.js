window.addEventListener("load", function () {
    console.log("Welcome to Cyberborg!");
});

// Smooth navigation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + this.textContent);
    });
});

// Service card interaction
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", function () {
        alert("Welcome to " +
            this.querySelector("h3").textContent);
    });
});