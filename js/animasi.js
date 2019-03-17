
  var stop=true;
  $(document).ready(function(){
    $(window).scroll(function() { 
      if ($(this.document).scrollTop() > 150) { 
        $(".carousel-caption").css({"opacity":"0.5","transition":"opacity 1s"}); 
      } 
      else{
        $(".carousel-caption").css("opacity", "1");
      }
    });
  });

$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(this.document).scrollTop() > 200) { 
        $(".navbar-fixed-top").css("background-color", "#0d47a1");     
      } 
      else{
        $(".navbar-fixed-top").css("background-color", "transparent");
      }
    });
  });

  $("#myModal").on('shown.bs.modal', function(){
      $("#modal_blur").addClass("blur");//Efek Blur
    }).blur(function(){//Menghilangkan Blur
      $("#modal_blur").removeClass("blur");
    });
    