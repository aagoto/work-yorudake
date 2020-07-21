$(function(){

    // スクロール時、メニュー表示
    var targetHeight = $('.js-float-menu-target').height();
    $(window).on('scroll', function(){
        $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    });

    // ハンバーガーメニュー
    $('.js-toggle-sp-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    $('.menu-link').on('click', function(){
        $('.js-toggle-sp-menu').toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    // 画像スライダー
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

    //   メニュークリック時のスクロール
    $('a[href^="#"]').click(function(){
        var adjust = -70;
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

});