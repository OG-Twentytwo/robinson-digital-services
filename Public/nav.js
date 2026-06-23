document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const toggleIcon = mobileToggle.querySelector('i');

    // Trigger state active transformations
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Dynamic Icon Class Mutation (Bars vs Close Window indicator)
        if (navMenu.classList.contains('active')) {
            toggleIcon.className = 'fa-solid fa-xmark';
            toggleIcon.style.color = '#00ffa3';
        } else {
            toggleIcon.className = 'fa-solid fa-bars-staggered';
            toggleIcon.style.color = '';
        }
    });

    // Close screen container whenever choosing localized inner page path markers
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            toggleIcon.className = 'fa-solid fa-bars-staggered';
            toggleIcon.style.color = '';
        });
    });
});