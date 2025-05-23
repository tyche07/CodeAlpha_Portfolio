// Contact 
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = "Thank you for your message! 🚀";
    contactForm.reset();
    setTimeout(() => {
      formMessage.textContent = "";
    }, 4000);
  });
}

// Navigation 
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
