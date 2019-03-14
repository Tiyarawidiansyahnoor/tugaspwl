$(window).scroll(function(){
$('navbar').toggleClass('onscroll', $(this).scrollTop() > 300);
});