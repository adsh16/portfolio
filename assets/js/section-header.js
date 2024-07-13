document.addEventListener('DOMContentLoaded', function () {
  const sectionHeader = document.getElementById('section-header');
  const sections = document.querySelectorAll('.Section');

  function updateSectionHeader() {
      let currentSection = '';
      
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
              currentSection = section.id;
          }
      });
      
      if (currentSection) {
          sectionHeader.textContent = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
          sectionHeader.style.display = 'block';
      } else {
          sectionHeader.style.display = 'none';
      }
  }

  window.addEventListener('scroll', updateSectionHeader);
  updateSectionHeader();
});
