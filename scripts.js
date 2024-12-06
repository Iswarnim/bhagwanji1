// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Ensure it scrolls to the start of the section
        });
    });
});

// Adjust layout for mobile viewport
function adjustLayout() {
    if (window.innerWidth < 768) {
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
}

// Listen for window resize and load events to adjust layout
window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);

// Ensure touch-friendly elements
document.querySelectorAll('button, a').forEach(element => {
    element.style.touchAction = 'manipulation';
});

// Fullscreen view for images using a modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.gallery-images img').forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

modal.addEventListener('click', function (e) {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});
// Fullscreen view for images using a modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.gallery-images img').forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

modal.addEventListener('click', function (e) {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});

const translations = {
    en: {
        welcome: "Welcome to Shree Madhusudan Bhagwan Ji Temple",
        about: "About",
        overview: "Overview",
        contact: "Contact Us",
        // Add more translations as needed
    },
    hi: {
        welcome: "श्री मधुसूदन भगवान जी मंदिर में आपका स्वागत है",
        about: "के बारे में",
        overview: "अवलोकन",
        contact: "संपर्क करें",
        // Add more translations as needed
    }
};



function switchLanguage(url) {
    // Add a class to initiate the page flip effect
    document.body.classList.add('page-flip');

    // Delay the language switch to allow the transition to complete
    setTimeout(() => {
        window.location.href = url;
    }, 1000); // Adjust the delay to match the animation duration
}

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        switcher.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = switcher.getAttribute('onclick').replace("switchLanguage('", "").replace("')", "");
            switchLanguage(targetUrl);
        });
    }
});
