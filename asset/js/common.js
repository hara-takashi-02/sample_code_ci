//スクロールアニメーション
wow = new WOW();
wow.init();

//imgタグをsvg化
/*
window.addEventListener('load', function () {
  deSVG('.svg', true);
});*/

//アンカーリンク スムーススクロール
$(function () {
  $('a[href^="#"]').not('.systemTab .js-systemTab').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//topに戻るボタン
$(document).ready(function () {
  var showFlag = false;
  var topBtn = $('.js_backtop');
  (topBtn).css('opacity', '0');
  var showFlag = false;

  $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        if (showFlag == false) {
          showFlag = true;
          topBtn.stop().animate({ 'opacity': '1' }, 500);
        }
      } else {
        if (showFlag) {
          showFlag = false;
          topBtn.stop().animate({ 'opacity': '0' }, 500);
        }
      }
  });

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  $('.js_backtop').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

/* アコーディオン */
$(function () {
  var acBtn = $('.js-accordionBtn');
  acBtn.on('click', function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass('open', 200);
  });
});

/* moreボタン */
$(function () {
  var acBtn = $('.js-moreBtn');
  acBtn.on('click', function () {
    $(this).prev().slideToggle(200);
    $(this).toggleClass('open', 200);
  });
});

// ハンバーガーメニュー
$(function () {

  var $hamburger_btn = $('#js-hamburger-btn');
  var $navin = $('#js-hamburger-gnav ');
  var $search_btn = $('#js-search-btn');
  var $nav2in = $('#js-search-gnav');
  var open = 'open'; // class

  $hamburger_btn.on('click', function () {
    if (!$hamburger_btn.hasClass(open)) {
      $hamburger_btn.addClass(open);
      $navin.addClass(open);
      $search_btn.removeClass(open);
      $nav2in.removeClass(open);
    } else {
      $hamburger_btn.removeClass(open);
      $navin.removeClass(open);
    }
  });

});

//swiper 必要なら設置
$(function () {
  if ($(".js-swiper-top").length) {
    let swiper = new Swiper('.js-swiper-top', {
      // 以下にオプションを設定
      loop: true, //最後に達したら先頭に戻る
      centeredSlides: true,
      slidesPerView: 1.5,
      spaceBetween: 20,
      autoplay: {
        delay: 2000,
      },

      //ページネーション表示の設定
      /*pagination: {
        el: '.swiper-pagination', //ページネーションの要素
        type: 'bullets', //ページネーションの種類
        clickable: true, //クリックに反応させる
      },
  
      //ナビゲーションボタン（矢印）表示の設定
      navigation: {
        nextEl: '.swiper-button-next', //「次へボタン」要素の指定
        prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
      },
  
      //スクロールバー表示の設定
      scrollbar: {
        el: '.swiper-scrollbar', //要素の指定
      },*/
    })
  }

});

// modal
$(function () {
  $('.js-modal-open').on('click', function () {
    $('.js-modal').fadeIn();
    $('.js-modal-open').addClass("is-hidden");
    return false;
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    $('.js-modal-open').removeClass("is-hidden");
    return false;
  });
});

//ページ内スクロールの位置微調整
$(function () {
  var headerHight = $("header").height();
  $('a[href^="#"]').click(function (e) {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight;
    $.when(
      $("html, body").animate({
        scrollTop: position
      }, 400, "swing"),
      e.preventDefault(),
    ).done(function () {
      var diff = target.offset().top - headerHight;
      if (diff === position) {
      } else {
        $("html, body").animate({
          scrollTop: diff
        }, 10, "swing");
      }
    });
  });
});