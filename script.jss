// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.style.cssText = `
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;
`;
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Optional: Alert when someone clicks email or phone
document.querySelectorAll('#contact a').forEach(el => {
  el.addEventListener('click', () => {
    alert('Thanks for reaching out to Shivam!');
  });
});
