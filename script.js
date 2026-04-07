// Initialize Icons
lucide.createIcons();

// Elements
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle Theme
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    sunIcon.style.display = isDark ? 'none' : 'block';
    moonIcon.style.display = isDark ? 'block' : 'none';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Initialize Theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
}

// Mobile Menu
mobileToggle.addEventListener('click', () => {
    const active = navLinks.classList.toggle('active');
    mobileToggle.innerHTML = active ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    lucide.createIcons();
});

// Fade-in on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .feature-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
