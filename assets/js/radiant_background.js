$(document).mousemove(function(event) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    
    var mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    var mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(0, 173, 181, 0.9), rgba(35, 79, 187, 0.9))');
});


// $(document).mousemove(function(event) {
//   windowWidth = $(window).width();
//   windowHeight = $(window).height();
  
//   mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//   mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
//   $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #00ADB5, #234FBB)');
// });

