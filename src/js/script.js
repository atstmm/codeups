
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // spドロワー
    $(".js-hamburger").click(function(){
        if($(".js-hamburger").hasClass("is-active")){
        $(".js-hamburger").removeClass("is-active");
        $(".js-sp-nav").fadeOut(300);
    }else{
        $(".js-hamburger").addClass("is-active");
        $(".js-sp-nav").fadeIn(300);
    }

});
   //swiper sp
   var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination", // 追加したクラス名に変える
    },
        clickable: true, // クリック可能にする
        loop: true, // ループさせる
        autoplay: { // 自動再生
        delay: 3000,
    },
  });
  //swiper pc
   var swiper = new Swiper(".mySwiper-pc", {
    pagination: {
      el: ".swiper-pagination", // 追加したクラス名に変える
    },
        clickable: true, // クリック可能にする
        loop: true, // ループさせる
        autoplay: { // 自動再生
        delay: 3000,
    },
  });
   //swiper campaign
   var swiper = new Swiper(".mySwiper-campaign", {
    slidesPerView: 1.25,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 40,
        autoplay: false
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    freeMode: true, // 前後のスライドで止まらずにスライド
      loop: true, // ループさせる
      autoplay: { // 自動再生
      delay: 3000,
  },

  });

  // ページトップボタン
$(function () {
  const pageTop = $("#js-pagetop");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  
});

// フッター手前で止まるボタン


$(document).ready(function () {
  $("#js-pagetop").hide();
  $(window).on("scroll", function () {
    var scrollHeight = $(document).height(); //ドキュメントの高さ
    var scrollPosition = $(window).height() + $(window).scrollTop(); //現在の位置
    var footHeight = $("footer").innerHeight(); //フッターの高さ

    if ($(window).width() <= 767) {
      footHeight += 15; // ウィンドウ幅が767px以下の場合は、footHeightに15を追加
    } else {
      footHeight += 20; // ウィンドウ幅が768px以上の場合は、footHeightに20を追加
    }

    if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在の位置の差がフッターの高さ以下のとき
      $("#js-pagetop").css({ position: "absolute", bottom: footHeight + "px" }); //positionをabsoluteに変更
    } else { //それ以外の場合は
      $("#js-pagetop").css({ position: "fixed", bottom: "0" }); //固定で表示
    }
  });

});

//ローディングアニメーション colorbox
//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});

});




