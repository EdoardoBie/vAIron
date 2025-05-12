// Responsive Navbar Toggle
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function closeNav() {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close nav on link click (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNav();
    });
});

// Close nav on resize (desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeNav();
    }
});

// Navbar scroll effect (shrink on scroll)
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1 && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlight on scroll
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// FAQ accordion
document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const parent = toggle.closest('.faq-item');
        const answer = parent.querySelector('.faq-answer');
        toggle.classList.toggle('active');
        answer.classList.toggle('active');
    });
});

// Intersection animations (desktop only)
if (window.innerWidth > 768) {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-header, .feature-card, .service-card, .project-card, .team-member, .blog-card, .faq-item').forEach(element => {
        observer.observe(element);
    });
}

// Parallax effect for hero visual and strokes
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
    document.querySelectorAll('.stroke').forEach((stroke, index) => {
        stroke.style.transform = `translateY(${scrollY * (0.1 + index * 0.05)}px)`;
    });
});

// Project tabs (filter logic placeholder)
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));
        btn.classList.add('active');
        // Filtering logic can be implemented here
    });
});

// Testimonial slider (placeholder)
document.querySelectorAll('.testimonial-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Implement testimonial navigation if needed
    });
});

// Custom cursor movement
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = cursorDot.style.left = `${e.clientX}px`;
    cursor.style.top = cursorDot.style.top = `${e.clientY}px`;
});
