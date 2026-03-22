
// ===================================
// SMOOTH SCROLL
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      closeMenu();
    }
  });
});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});

// ===================================
// DARK MODE TOGGLE
// ===================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'dark-mode';
htmlElement.classList.add(currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark-mode')) {
    htmlElement.classList.remove('dark-mode');
    htmlElement.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    updateThemeIcon('light-mode');
  } else {
    htmlElement.classList.remove('light-mode');
    htmlElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    updateThemeIcon('dark-mode');
  }
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark-mode') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScrollTop = scrollTop;
});

// ===================================
// ACTIVE NAV LINK
// ===================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function closeMenu() {
  hamburger.classList.remove('active');
  navLinksContainer.classList.remove('active');
  mobileMenuOverlay.classList.remove('active');
}

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburger.classList.toggle('active');
  navLinksContainer.classList.toggle('active');
  mobileMenuOverlay.classList.toggle('active');
});

// Close menu when overlay is clicked
mobileMenuOverlay.addEventListener('click', closeMenu);

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu when clicking elsewhere
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-container')) {
    closeMenu();
  }
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
