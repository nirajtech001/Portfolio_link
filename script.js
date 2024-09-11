const { text } = require("body-parser");

// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});


// External JavaScript for scroll-minimizing navigation bar

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");

    // Add 'scrolled' class when scrolled down 50px
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
