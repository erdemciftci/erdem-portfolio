const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


const menuButton = document.getElementById("menuButton");

const navbar = document.getElementById("navbar");


menuButton.addEventListener("click", function () {
    navbar.classList.toggle("active");
});


const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});