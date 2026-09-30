document.addEventListener("DOMContentLoaded", () => {
  const textToType = "Hi, I'm Vinnie Angelyn!";
  const speed = 100;
  let index = 0;

  function typeWriter() {
    const target = document.getElementById("typing-text");
    if (target && index < textToType.length) {
      target.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        
        // Prevent body scrolling when mobile menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking backdrop overlay
    navOverlay.addEventListener('click', closeMenu);

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});