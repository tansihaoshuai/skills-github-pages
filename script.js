document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const aboutSection = document.getElementById('about');

    // Header color change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#f1f1f1';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    });

    // Slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        let dots = document.querySelectorAll(".dot");

        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active"));

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}

        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].classList.add("active");

        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});
// Add your JavaScript code here
// Example: Adding a new project to the portfolio
