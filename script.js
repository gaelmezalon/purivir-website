// =========================================
// PURIVIR WEBSITE - MAIN JAVASCRIPT
// =========================================


// =========================================
// UPDATE FOOTER YEAR AUTOMATICALLY
// =========================================

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// =========================================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================================
// HEADER EFFECT WHEN SCROLLING
// =========================================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================================
// SERVICE CARD ANIMATION
// =========================================

const serviceCards = document.querySelectorAll(".service-card");

const observerOptions = {
    threshold: 0.15
};

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, observerOptions);

serviceCards.forEach((card) => {
    serviceObserver.observe(card);
});


// =========================================
// PHONE CALL BUTTONS
// =========================================

const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Purivir phone button clicked.");
    });
});


// =========================================
// TEXT MESSAGE BUTTONS
// =========================================

const textLinks = document.querySelectorAll('a[href^="sms:"]');

textLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("Purivir text button clicked.");
    });
});
const dateInput = document.getElementById("date");
const datePlaceholder = document.querySelector(".date-placeholder");

if (dateInput && datePlaceholder) {
    const updateDatePlaceholder = () => {
        if (dateInput.value) {
            datePlaceholder.style.display = "none";
        } else {
            datePlaceholder.style.display = "block";
        }
    };

    dateInput.addEventListener("change", updateDatePlaceholder);
    dateInput.addEventListener("input", updateDatePlaceholder);

    updateDatePlaceholder();
}