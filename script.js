// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  const menuToggle = document.getElementById('menu-toggle');
      const navbarLinks = document.getElementById('navbar-links');
    
      menuToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
      });
