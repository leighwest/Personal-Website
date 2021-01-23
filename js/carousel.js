$(document).ready(function(){
    $('.portfolio-slider').slick({

    //   autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      prevArrow:$('.prev'),
      nextArrow:$('.next'),
      dotsClass: 'dots-container slick-dots'
  });

  // AOS.init({
  // });
});