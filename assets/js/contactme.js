document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your public key
    emailjs.init('cRInRVJ89rJr9D19M'); // Replace with your actual public key
  
    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const serviceID = 'service_rstvckc'; // Your EmailJS service ID
      const templateID = 'template_q08gz9p'; // Your EmailJS template ID
  
      // Collect form data
      const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
      };
  
      // Log template parameters for debugging
      console.log('Template Params:', templateParams);
  
      // Send the email
      emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
          console.log('Email sent successfully:', response);
          // Show success message on the page with border
          // document.getElementById('form-feedback').innerHTML = '<p style="color: green; border: 2px solid black; padding: 10px; border-radius: 5px;">Message sent successfully! Thank you for getting in touch.</p>';
          alert("Hello! Your message was sent successfully!");
          document.getElementById('contact-form').reset(); // Reset form

        }, function(error) {
          console.error('Failed to send the message:', error);
          // Show error message on the page with border
          // document.getElementById('form-feedback').innerHTML = '<p style="color: red; border: 2px solid red; padding: 10px; border-radius: 5px;">Failed to send the message. Please try again later.</p>';
          alert("Oops! There was some error sending your message");
        });
    });
  });
  