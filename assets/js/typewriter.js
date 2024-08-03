document.addEventListener("DOMContentLoaded", function () {
    const dynamicText = document.querySelector(".dynamic-text");
    const originalText = dynamicText.dataset.typetext;
    let typingInterval;
  
    function startTyping() {
      let textArray = originalText.split("");
      let counter = -1;
      dynamicText.innerHTML = "";
      dynamicText.style.setProperty('--cursor-position', '0ch');
  
      clearInterval(typingInterval);
  
      function typeJs() {
        if (counter < textArray.length - 1) {
          counter++;
          dynamicText.innerHTML = textArray.slice(0, counter + 1).join('');
          dynamicText.style.setProperty('--cursor-position', `${counter + 1}ch`);
        } else {
          clearInterval(typingInterval);
        }
      }
  
      typingInterval = setInterval(typeJs, 100); // Adjust typing speed here
    }
  
    dynamicText.addEventListener("mouseenter", startTyping);
  
    // Initial typing effect
    startTyping();
  });