// Smooth scroll for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href')?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;

    event.preventDefault();
    const headerOffset = 70;
    const rect = target.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

function updateActiveNav() {
  let currentId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 180) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    const hrefId = link.getAttribute('href')?.slice(1);
    if (hrefId === currentId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

