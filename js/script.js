// ================================
// MENU MOBILE
// ================================

const menuBtn = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ================================
// HEADER SCROLL EFFECT
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// ================================
// SCROLL TOP BUTTON
// ================================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        scrollBtn.classList.add("active");
    } else {
        scrollBtn.classList.remove("active");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================================
// SMOOTH SCROLL LINKS
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ================================
// SIMPLE REVEAL ANIMATION
// ================================

const elements = document.querySelectorAll(
    ".benefit-card, .product-section, .gel-section, .video-card, .testimonial-card, .reseller-section"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});