document.addEventListener("DOMContentLoaded", () => {

    // ===== NAVBAR =====
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ===== SERVICES SLIDER =====
    const slider = document.querySelector(".services-slider");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    if (!slider || !leftArrow || !rightArrow) {
        console.log("Slider elements not found");
        return;
    }

    const scrollStep = 320;
    const delay = 4000;
    let autoSlideInterval;

    function autoSlide() {
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            slider.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
    }

    function startAutoSlide() {
        stopAutoSlide(); // prevents stacking intervals
        autoSlideInterval = setInterval(autoSlide, delay);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Arrow buttons
    rightArrow.addEventListener("click", () => {
        slider.scrollBy({ left: scrollStep, behavior: "smooth" });
        stopAutoSlide();
    });

    leftArrow.addEventListener("click", () => {
        slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
        stopAutoSlide();
    });

    // Pause on hover
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    // Start slider
    startAutoSlide();

});
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(){
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[index].classList.add("active");

    index++;
    if(index >= testimonials.length){
        index = 0;
    }
}

setInterval(showTestimonial, 4000);


