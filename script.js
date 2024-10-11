const { text } = require("body-parser");

// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

// script.js

Scroll-based animation for the skills section
window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('#skills');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        skillsSection.classList.add('active');
    }
});




