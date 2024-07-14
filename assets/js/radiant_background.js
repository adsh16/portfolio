$(document).mousemove(function(event) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    // console.log(mouseX);
    // console.log(mouseY);

    var mouseXpercentage = Math.round(mouseX / windowWidth * 100);
    var mouseYpercentage = Math.round(mouseY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgb(0, 173, 181,0.9), rgba(35, 79, 187, 0.9))');
});


// $(document).mousemove(function(event) {
//   windowWidth = $(window).width();
//   windowHeight = $(window).height();
  
//   mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//   mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
//   $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #00ADB5, #234FBB)');
// });

