document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sideNav = document.getElementById('sideNav');
    const closeBtn = document.getElementById('closeBtn');
    const navLinks = document.querySelectorAll('.side-nav li');

    // Check if overlay exists, if not create it
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    const openMenu = () => {
        sideNav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Staggered link animation
        navLinks.forEach((link, index) => {
            link.style.opacity = "0";
            link.style.transform = "translateX(20px)";
            setTimeout(() => {
                link.style.transition = "all 0.4s ease";
                link.style.opacity = "1";
                link.style.transform = "translateX(0)";
            }, 100 + (index * 50));
        });
    };

    const closeMenu = () => {
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    menuToggle.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when a link is clicked (important for single-page feel)
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

// Service and portfolio
document.addEventListener("DOMContentLoaded", () => {
    // 1. Navigation for all Portfolio Buttons
    const portfolioButtons = document.querySelectorAll('.btn-text');

    portfolioButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Find the project name to decide where to go (optional)
            const projectName = e.target.closest('.service-card').querySelector('h3').innerText;
            console.log("Navigating to:", projectName);

            // For now, redirect to a general portfolio or contact page
            window.location.href = 'portfolio.html';
        });
    });

    // 2. Scroll Animation (Relume Style Reveal)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        // Initial hidden state
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;

        revealObserver.observe(card);
    });
});

// Helper for the animation class
const style = document.createElement('style');
style.innerHTML = `
    .service-card.active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

//Approch Section
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Apply to all elements with the animate class
    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach(target => observer.observe(target));
});
// Result section 

// Reuse existing observer for all sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));