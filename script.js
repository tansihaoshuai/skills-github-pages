document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const aboutSection = document.getElementById('about');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#2E7D32';
        } else {
            header.style.backgroundColor = '#4CAF50';
        }
    });

    aboutSection.addEventListener('mouseover', () => {
        aboutSection.style.transform = 'scale(1.05)';
        aboutSection.style.transition = 'transform 0.3s';
    });

    aboutSection.addEventListener('mouseout', () => {
        aboutSection.style.transform = 'scale(1)';
    });
});
