// Toggle Sidebar for Mobile
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  }
});

// Smooth Scrolling Navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Add active class to clicked link
    link.classList.add('active');
    
    // Get target section
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // Smooth scroll to section
    if (targetSection) {
      const headerHeight = document.querySelector('.tutorial-header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close sidebar on mobile after clicking
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('.content-section, .benefits-section, .muscles-section, .steps-section, .mistakes-section, .video-section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const headerHeight = document.querySelector('.tutorial-header').offsetHeight;
    
    if (window.pageYOffset >= (sectionTop - headerHeight - 100)) {
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