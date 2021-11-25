$(document).ready(function(){

  $('.top-bar-hamburger').click(function(){
    $('.top-bar__links').css('display:block');
    $('.top-bar__links').toggle();
  })

  $('.nav-bar-hamburger').click(function(){
    $('.nav-menu').css('display:block');
    $('.nav-menu').toggle();
  })

  $('.nav-bar__right-btn').click(function(){
    $('.top-bar').css('display:none');
    $('.top-bar').toggle();
  })


    $('.banner__slides').slick({
      dots: true,
      infinite: true,
      speed: 700,
      //autoplay:true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    });
  });