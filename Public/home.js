/* --- HERO BACKGROUND SLIDESHOW LOOP ENGINE --- */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.landing-slideshow .slide');
    let currentSlideIndex = 0;
    const slideIntervalTime = 5000; // Rotates smoothly every 5 seconds

    function nextBackgroundSlide() {
        // Drop visibility from the active node
        slides[currentSlideIndex].classList.remove('active');

        // Loop the cursor position securely around array length
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        // Commit active visibility class onto new target index
        slides[currentSlideIndex].classList.add('active');
    }

    // Initialize logic intervals only if DOM targets verify correctly
    if (slides.length > 0) {
        setInterval(nextBackgroundSlide, slideIntervalTime);
    }
});


/*Services js*/

/* --- BENTO MATRIX VIEWPORT FADE ACTION ENGINE --- */
document.addEventListener('DOMContentLoaded', () => {
    const bentoCards = document.querySelectorAll('.bento-card');

    const scrollTrackingConfig = {
        root: null,
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    };

    const matrixObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Instantly append CSS initialization values via JS styles
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Unobserve node to allow standard manual CSS hovers afterward
                observer.unobserve(entry.target);
            }
        });
    }, scrollTrackingConfig);

    bentoCards.forEach((card) => {
        // Pre-render state attributes for standard script transitions
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

        matrixObserver.observe(card);
    });
});

/*portfolio js*/

/* --- THE DEPLOYMENT LEDGER VIEWPORT ACTION ENGINE --- */
document.addEventListener('DOMContentLoaded', () => {
    const structuralProjectCards = document.querySelectorAll('.project-card');

    const ledgerScrollConfig = {
        root: null,
        threshold: 0.02,
        rootMargin: '0px 0px -20px 0px'
    };

    const ledgerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ledger-visible');
                observer.unobserve(entry.target); // Execution loop complete
            }
        });
    }, ledgerScrollConfig);

    structuralProjectCards.forEach((card) => {
        // Build styling tags dynamically via JS to maintain structural backward capability
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

        ledgerObserver.observe(card);
    });
});

// Appended Style Controller Target logic
const cssStyleHook = document.createElement('style');
cssStyleHook.innerHTML = `
    .project-card.ledger-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(cssStyleHook);

/*About Us js*/

/* --- ABOUT SECTION SCROLL ENGINE HOOK --- */
document.addEventListener('DOMContentLoaded', () => {
    const teamCards = document.querySelectorAll('.profile-card');

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    teamCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        aboutObserver.observe(card);
    });
});

/* --- FAQ js --- */

/* --- FRICTIONLESS FAQ ACCORDION CONTROLLER ENGINE --- */
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');

        trigger.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');

            // 1. Collapse all other active items (Strict Mutual Exclusion Pattern)
            faqItems.forEach(sibling => {
                if (sibling !== item && sibling.classList.contains('active')) {
                    sibling.classList.remove('active');
                    const siblingContent = sibling.querySelector('.faq-content');
                    siblingContent.style.maxHeight = '0';
                    sibling.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
                }
            });

            // 2. Toggle current element operational states
            if (isCurrentlyActive) {
                item.classList.remove('active');
                content.style.maxHeight = '0';
                trigger.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                // Calculate actual inner pixel context dynamically for smooth transitions
                content.style.maxHeight = content.scrollHeight + 'px';
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Handle viewport resize configurations dynamically to fix bounding box limits
    window.addEventListener('resize', () => {
        faqItems.forEach(item => {
            if (item.classList.contains('active')) {
                const content = item.querySelector('.faq-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});

/*footer js */



/* --- AUTO-BALANCING SYSTEM YEAR UPDATER --- */
document.addEventListener('DOMContentLoaded', () => {
    // Looks for element instances inside the footer text stack containing copyright information
    const footerBottomBlock = document.querySelector('.footer-bottom p');
    if (footerBottomBlock) {
        const structuralYearVal = new Date().getFullYear();
        // Dynamically forces string accuracy to current environment matrix timeline (2026)
        footerBottomBlock.innerHTML = footerBottomBlock.innerHTML.replace(/202[0-9]/g, structuralYearVal);
    }
});