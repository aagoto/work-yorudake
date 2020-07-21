$(function(){

    var targetHeight = $('.js-float-menu-target').height();
    $(window).on('scroll', function(){
        $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    });

    $('.js-toggle-sp-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    $('.menu-link').on('click', function(){
        $('.js-toggle-sp-menu').toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    let mySwiper = new Swiper ('#swiper', {
        autoplay: {
          delay: 6000,
        },
        
        speed:1000,
        
        loop: true,
        
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    
});