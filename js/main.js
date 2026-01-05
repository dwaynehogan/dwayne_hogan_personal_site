// Load header and footer includes
async function loadIncludes() {
  // Load header
  const headerElement = document.getElementById('header-placeholder');
  if (headerElement) {
    try {
      const response = await fetch('/includes/header.html');
      const html = await response.text();
      headerElement.innerHTML = html;
    } catch (error) {
      console.error('Error loading header:', error);
    }
  }

  // Load footer
  const footerElement = document.getElementById('footer-placeholder');
  if (footerElement) {
    try {
      const response = await fetch('/includes/footer.html');
      const html = await response.text();
      footerElement.innerHTML = html;
    } catch (error) {
      console.error('Error loading footer:', error);
    }
  }
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', async function() {
  // Load header and footer first
  await loadIncludes();

  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

});
