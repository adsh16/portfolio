// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    setTimeout(function() {
      preloader.style.display = 'none'; // Hide preloader
      content.style.display = 'block';  // Show content
      document.body.style.overflow = ''; // Restore scrolling
    }, 2000); // Adjust this duration to match the loading time of your actual content
  });
  