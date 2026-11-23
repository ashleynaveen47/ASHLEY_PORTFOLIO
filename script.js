// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

const links = document.querySelectorAll("#navLinks a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// TYPING ANIMATION

const words = [
    "Developer",
    "Programmer",
    "Tech Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;

let characterIndex = 0;

let deleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing");

    const currentWord = words[wordIndex];

    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingElement.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 70 : 120;

    if (!deleting && characterIndex === currentWord.length) {

        deleting = true;

        speed = 1200;

    } else if (deleting && characterIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


console.log("Welcome to Ashley Henna's Portfolio!");