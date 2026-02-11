<<<<<<< HEAD
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Show "Back to Top" button
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Top";
backToTop.id = "backToTop";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Simple form validation (optional, if you add a form later)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
        } else {
            alert(`Thank you for reaching out, ${name}! I'll get back to you soon.`);
            form.reset();
        }
    });
}
=======
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Show "Back to Top" button
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Top";
backToTop.id = "backToTop";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Simple form validation (optional, if you add a form later)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
        } else {
            alert(`Thank you for reaching out, ${name}! I'll get back to you soon.`);
            form.reset();
        }
    });
}
>>>>>>> c1893fa832742a76fb88bc243dc2d42c0412447b
