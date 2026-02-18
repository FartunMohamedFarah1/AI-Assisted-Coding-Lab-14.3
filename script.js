// script.js

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive features
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});