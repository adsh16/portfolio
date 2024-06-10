document.addEventListener('DOMContentLoaded', function () {
    const sectionHeader = document.getElementById('section-header');
    const sections = document.querySelectorAll('section');
  
    function updateSectionHeader() {
      let currentSection = '';
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.id;
        }
      });
  
      sectionHeader.textContent = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
    }
  
    window.addEventListener('scroll', updateSectionHeader);
    updateSectionHeader();
  });
  