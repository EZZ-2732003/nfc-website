// Scroll Animations
window.addEventListener('scroll', function () {
    let fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function (element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
