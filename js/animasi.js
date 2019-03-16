$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 150) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "#0d47a1"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
      }
    });
  });

  $(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 300) { // check if user scrolled more than 50 from top of the browser window
        document.getElementById('header-carousel').style.visibility = 'hidden'; // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        document.getElementById('header-carousel').style.visibility = 'visible'; // if not, change it back to transparent
      }
    });
  });
  