document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelectorAll(".type-writer");
    console.log(element)
    var text = element.innerHTML;
    var typingSpeed = 100; // Adjust typing speed here
    var delayBetweenRepeats = 2000; // Delay before restarting the typing effect

    function typeWriter(text, i) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(function() {
                typeWriter(text, i);
            }, typingSpeed);
        } else {
            setTimeout(function() {
                element.innerHTML = "";
                typeWriter(text, 0);
            }, delayBetweenRepeats);
        }
    }

    element.innerHTML = ""; // Clear the initial text
    typeWriter(text, 0); // Start the typing effect
});