document.addEventListener('DOMContentLoaded', function() {
    // Logo click refresh
    const logo = document.getElementById('navLogo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.reload();
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        menuToggle.classList.toggle('active');
        
        // Toggle menu icon
        const icon = menuToggle.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // If mobile menu is open, close it
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    body.classList.remove('menu-open');
                    menuToggle.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Handle form submissions (if any)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
        });
    });

    // Add scroll class to header
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-darker/95');
        } else {
            header.classList.remove('bg-darker/95');
        }
    });
});
