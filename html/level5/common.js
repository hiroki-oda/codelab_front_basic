$(function () {
  //ハンバーガーメニュー
  $('#open').on('click',function(){
    $('body').addClass('active');
  });

  $('#close').on('click',function(){
    $('body').removeClass('active');
  });

  $('#mask').on('click',function(){
    $('body').removeClass('active');
  });
  //ハンバーガーメニューここまで

  // ヘッダーのアニメーション
  $('.top h1').css({ opacity: '0' });
  $('.underbar-w').css({ opacity: '0' });
  $('.top-text').css({ opacity: '0' });
  setTimeout(function () {
    $('.top h1').stop().animate({ opacity: '1' });
    setTimeout(function () {
      $('.underbar-w').stop().animate({ opacity: '1' });
    }, 100);
    setTimeout(function () {
      $('.top-text').stop().animate({ opacity: '1' });
    }, 700);
  }, 1000);
  setTimeout(function () {
    $('.top h1').addClass('top-title-a');
    setTimeout(function () {
      $('.underbar-w').addClass('underbar-w-a');
    }, 500);
    setTimeout(function () {
      $('.top-text').addClass('top-text-a');
    }, 700);
  }, 1000);
  // ヘッダーのアニメーションここまで

  // イントロのアニメーション
  $(window).scroll(function () {
    setTimeout(function () {
      $('.commentary-a h2').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).removeClass('intro-title');
          $(this).addClass('intro-active');
        }
      });
      setTimeout(function () {
        $('.commentary-a .underbar-b').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).removeClass('underbar-b');
            $(this).addClass('active-bar1');
          }
        });
      }, 300);
      setTimeout(function () {
        $('.commentary-a .text').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).removeClass('text');
            $(this).addClass('active-text1');
          }
        });
      }, 500);
    }, 700);
  });
  // イントロのアニメーションここまで

  // 各middleのアニメーション
  $(window).scroll(function () {
    setTimeout(function () {
      $('.m-text').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).addClass('m-text-active');
        }
      });
      setTimeout(function () {
        $('.m-text').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).removeClass('m-text');
            $(this).addClass('m-text-active');
          }
        });
      }, 400);
    }, 500);
  });
  // 各middleのアニメーションここまで

  // clientsのアニメーション
  $(window).scroll(function () {
    setTimeout(function () {
      $('.provide h2').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).removeClass('clients-title');
          $(this).addClass('clients-title-a');
        }
      });
      setTimeout(function () {
        $('.logo').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $('.logo1').stop().animate({ opacity: '1' });
          }
        }, 400);
        setTimeout(function () {
          $('.logo').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
              $('.logo2').stop().animate({ opacity: '1' });
            }
          });
        }, 500);
        setTimeout(function () {
          $('.logo').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
              $('.logo3').stop().animate({ opacity: '1' });
            }
          });
        }, 600);
        setTimeout(function () {
          $('.logo').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
              $('.logo4').stop().animate({ opacity: '1' });
            }
          });
        }, 700);
        setTimeout(function () {
          $('.logo').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
              $('.logo5').stop().animate({ opacity: '1' });
            }
          });
        }, 800);
      }, 900);
    }, 1000);
  });
  // clientsのアニメーションここまで

  // aboutのアニメーション
  $(window).scroll(function () {
    setTimeout(function () {
      $('.us1 h2').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).addClass('h2-a');
        }
      });
      setTimeout(function () {
        $('.us1 .text').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).addClass('text-a');
          }
        });
      }, 200);
    }, 100);
  });
  // aboutのアニメーションここまで

  // WHY CHOOSE USのアニメーション
  $(window).scroll(function () {
    setTimeout(function () {
      $('.us2 h2').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).removeClass('us2-title');
          $(this).addClass('us2-title-active');
        }
      });
      setTimeout(function () {
        $('.us2 .underbar-b').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).removeClass('underbar-b');
            $(this).addClass('active-bar2');
          }
        });
      }, 300);
      setTimeout(function () {
        $('.us2 .text').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).removeClass('text');
            $(this).addClass('active-text2');
          }
        });
      }, 500);
    }, 700);
  });

  $(window).on('load resize', function(){
    var winW = $(window).width();
    var devW = 365;
    if (winW <= devW) {
      //767px以下の時の処理
      $('.device-icon').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots',
      });
    }
    //768pxより大きい時の処理
    else {
    }
  });
  // WHY CHOOSE USのアニメーションここまで

  // TOUCHのアニメーション
  $(window).scroll(function () {
    setTimeout(function () {
      $('.commentary-b h2').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).removeClass('touch-title');
          $(this).addClass('touch-active');
        }
      });
      setTimeout(function () {
        $('.commentary-b .underbar-b').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).removeClass('underbar-b');
            $(this).addClass('active-bar3');
          }
        });
      }, 300);
      setTimeout(function () {
        $('.commentary-b .text').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).removeClass('text');
            $(this).addClass('active-text3');
          }
        });
      }, 500);
    }, 700);
  });
  // TOUCHのアニメーションここまで

  // footerのアニメーション
  $(window).scroll(function () {
    setTimeout(function () {
      $('.contact .location').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).removeClass('location');
          $(this).addClass('location-active');
        }
      });
      setTimeout(function () {
        $('.contact .form-name').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100) {
            $(this).removeClass('form-name');
            $(this).addClass('form-name-active');
          }
        });
      }, 200);
    }, 100);
  });
  // footerのアニメーションここまで
});