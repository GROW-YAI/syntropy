// Performance-optimized JavaScript for Syntropy Website

// Google Sheets API Configuration
const API_KEY = 'AIzaSyCGNF5zBPVkoSY9N56r6LDpuLxl-dpVvMI'; // Replace with your Google API key
const SPREADSHEET_ID = '1CI5VtqIo6QXQl7eisFrv1FkqOCd6o9yG9UpoW4MtTdM'; // Replace with your Google Sheets ID
const range = 'Sheet1!A2:D5'; // Update the range based on your sheet

// Debounced scroll handler for better performance
let scrollTimeout;
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Throttle scroll events for better performance
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleScroll, 10);
});

// Mobile menu toggle with ARIA support
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger-menu");
    const isExpanded = navLinks.classList.toggle("active");
    
    hamburger.setAttribute('aria-expanded', isExpanded);
    
    // Focus management for accessibility
    if (isExpanded) {
        const firstLink = navLinks.querySelector('a');
        if (firstLink) {
            firstLink.focus();
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger-menu");
    
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Function to fetch data from Google Sheets
function fetchContent() {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const rows = data.values;
            // Loop through each row and populate the content
            rows.forEach(row => {
                const pageName = row[0];
                const content = row[1];
                const description = row[2];
                const imageURL = row[3]; 

                if (pageName === 'Home') {
                    document.getElementById('homepage-title').innerText = content;
                    document.getElementById('homepage-description').innerText = description;
                    if (imageURL) {
                        document.getElementById('homepage-image').src = imageURL;
                        document.getElementById('homepage-image').style.display = 'block';
                    }
                } else if (pageName === 'About Us') {
                    document.getElementById('about-content').innerText = content;
                } else if (pageName === 'Services') {
                    document.getElementById('services-content').innerText = content;
                } else if (pageName === 'Contact Us') {
                    document.getElementById('contact-content').innerText = content;
                }
            });
        })
        .catch(error => {
            console.error('Error fetching Google Sheets data:', error);
            document.getElementById('homepage-title').innerText = 'Sorry, content failed to load.';
            document.getElementById('homepage-description').innerText = 'Sorry, content failed to load.';
            document.getElementById('homepage-image').src = '';
            document.getElementById('homepage-image').style.display = 'none';
            document.getElementById('about-content').innerText = 'Sorry, content failed to load.';
            document.getElementById('services-content').innerText = 'Sorry, content failed to load.';
            document.getElementById('contact-content').innerText = 'Sorry, content failed to load.';
        });
}

// Contact form validation
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the content when the page loads
    fetchContent();
    
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Initialize Swiper with performance optimizations
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // Performance optimizations
            lazy: true,
            preloadImages: false,
            watchSlidesProgress: true,
            watchSlidesVisibility: true
        });
    }
});

// Utility function for email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Skip link focus management
document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', () => {
            setTimeout(() => {
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.focus();
                }
            }, 100);
        });
    }
});