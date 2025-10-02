document.addEventListener("DOMContentLoaded", () => {
  // Sticky header con reducción de altura al hacer scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
});