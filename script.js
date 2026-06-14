
// MOBILE MENU


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});



// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    console.log(window.scrollY);

    if(window.scrollY > 300){
        backToTop.style.display = "flex";
    }else{
        backToTop.style.display = "none";
    }

});



// ACTIVE NAV LINK ON SCROLL


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});



// SMOOTH FADE ANIMATION


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about, .skills, .education, .experience, .projects, .contact"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

// TYPING EFFECT


const typingElement = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "UI Designer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// HERO IMAGE FLOAT EFFECT


const heroImage = document.querySelector(".circle");

let position = 0;
let direction = 1;

setInterval(() => {

    position += direction * 0.4;

    if (position > 12) direction = -1;
    if (position < -12) direction = 1;

    heroImage.style.transform =
        `translateY(${position}px)`;

}, 30);



// GLOW EFFECT ON MOUSE MOVE

document.addEventListener("mousemove", (e) => {

    document.body.style.background =
        `radial-gradient(
        circle at ${e.clientX}px ${e.clientY}px,
        rgba(0,217,255,0.12),
        #0c1022 40%
        )`;

});