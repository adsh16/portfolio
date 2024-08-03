document.addEventListener("DOMContentLoaded", function() {
    var typeWriters = document.querySelectorAll(".type-writer");
  
    typeWriters.forEach(function(typeWriter) {
      var fullText = typeWriter.textContent.trim(); // Get the full text content
      var initialText = fullText.slice(0, 3); // Get the first three characters
      var remainingText = fullText.slice(3); // Get the rest of the text
      var speed = 100; // Delay between each character (in milliseconds)
      var isAnimating = false; // Flag to prevent multiple animations
  
      function typeEffect() {
        var index = 0;
        typeWriter.textContent = initialText; // Reset to initial text
        isAnimating = true; // Set the flag to indicate animation is running
  
        function type() {
          if (index < remainingText.length) {
            typeWriter.textContent += remainingText.charAt(index);
            index++;
            setTimeout(type, speed);
          } else {
            isAnimating = false; // Reset the flag when animation completes
          }
        }
  
        type();
      }
  
      // Start animation on content load
      setTimeout(typeEffect, 1000);
  
      // Start animation on hover if not already running
      typeWriter.addEventListener("mouseenter", function() {
        if (!isAnimating) {
          typeEffect();
        }
      });
    });
  });
  