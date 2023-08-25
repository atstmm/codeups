
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // spドロワー
    $(".js-hamburger").click(function(){
        if($(".js-hamburger").hasClass("is-active")){
        $(".js-hamburger").removeClass("is-active");
        $(".js-sp-nav").fadeOut(300);
        $("body").removeClass("is-active");
        $(".header__inner").removeClass("is-active");
        
    }else{
        $(".js-hamburger").addClass("is-active");
        $(".js-sp-nav").fadeIn(300);
        $("body").addClass("is-active");
        $(".header__inner").addClass("is-active");
    }

    
});


   //swiper mv
   var swiper = new Swiper(".js-mv-swiper", {
    pagination: {
      el: ".swiper-pagination", // 追加したクラス名に変える
    },
        clickable: true, // クリック可能にする
        loop: true, // ループさせる
        autoplay: { // 自動再生
        delay: 3000,
    },
    effect: "fade",
    speed: 5000,
  });
  

   //swiper campaign
   var swiper = new Swiper(".js-campaign-swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      speed: 2000,
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      autoplay: { // 自動再生
            delay: 3000,
            disableOnInteraction: false,
        },
      breakpoints: {
            768: {
              spaceBetween: 40,
            },
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
      $("#js-pagetop").css({ position: "fixed", bottom: "15px" }); //固定で表示
    }
  });

});

//ローディングアニメーション colorbox
//要素の取得とスピードの設定
var box = $('.js-colorbox'),
    speed = 700;  
 
//.js-colorboxの付いた全ての要素に対して下記の処理を行う
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

//モーダル

$(document).ready(function() {
  // 画像をクリックした時の処理
  $('.js-modal-img img').on('click', function() {
    // クリックされた画像のソースを取得
    var imageSrc = $(this).attr('src');
    
    // モーダルに画像を表示
    $('.js-modal').html($(this).prop('outerHTML'));
    
    // モーダルを表示
    $('body').addClass('js-modal-open');
    $('.js-modal').fadeIn(200);
  });
  
  // モーダルをクリックした時の処理
  $('.js-modal').on('click', function() {
    // モーダルを非表示にする
    $('body').removeClass('js-modal-open');
    $(this).fadeOut(200);
  });
});


//faqアコーディオン
$(".js-accordion-title").on("click", function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass("open",200);
});











//ページリンク時ヘッダーの高さを持たせる


$(function () {
    var headH = $("header").outerHeight();
    var animeSpeed = 500;
    var urlHash = location.hash; //URLのハッシュタグを取得
    if (urlHash) { //ハッシュタグが有る場合
        $("body,html").scrollTop(0);
        setTimeout(function () { //無くてもいいが有ると動作が安定する
            var target = $(urlHash);
            var position = target.offset().top - headH;
            $("body,html").stop().animate({
                scrollTop: position
            }, animeSpeed);
        }, 0);
    }

  });

$(function () {
var headH = $("header").outerHeight(); //ヘッダーの高さを取得
    var animeSpeed = 500; //アニメーションスピード
    $("a[href^='#']").on({
        "click": function () {
            var href = $(this).attr("href");
            var target = $(href == "#" || href === "" ? "html" : href);
            var position;
            position = target.offset().top - headH; //ターゲットまでの距離からヘッダーの高さを引く
            $("body,html").stop().animate({
                scrollTop: position
            }, animeSpeed);
            return false;
        }
    });

  });



//campaignリンク

$(document).ready(function() {
  // アーカーリンクのハッシュを取得
  var hash = window.location.hash;
  
  // ハッシュが空でない場合、それに対応するタブを表示
  if (hash) {
    // ハッシュから#を取り除いてタブIDとして使用
    var tabId = hash.substring(1);
    
    // タブを非アクティブにする
    $('.js-tabs').removeClass('is-green');
    
    // 対応するタブをアクティブにする
    $('#' + tabId).addClass('is-green');
    
    // 対応するコンテンツを表示する
    $('.js-contents').hide();
    $('#' + tabId + '-content').show();
  } else {
    // ハッシュがない場合、最初のコンテンツを表示
    $(".js-contents:first-of-type").css("display", "block");
  }
  
  // タブをクリックすると表示を切り替える処理
  $(".js-tabs").on("click", function() {
    var tabId = $(this).attr('id');
    $('.js-tabs').removeClass('is-green');
    $(this).addClass('is-green');
    $('.js-contents').hide();
    $('#' + tabId + '-content').show();
  });
});





//information tab

$(document).ready(function() {
  // アーカーリンクのハッシュを取得
  var hash = window.location.hash;
  
  // ハッシュが空でない場合、それに対応するタブを表示
  if (hash) {
    // ハッシュから#を取り除いてタブIDとして使用
    var tabId = hash.substring(1);
    
    // タブを非アクティブにする
    $('.js-tab').removeClass('is-current');
    
    // 対応するタブをアクティブにする
    $('#' + tabId).addClass('is-current');
    
    // 対応するコンテンツを表示する
    $('.js-content').hide();
    $('#' + tabId + '-content').show();

    const index = $(this).index();
   // コンテンツを非表示にして、クリックしたタブのインデックス番号と同じコンテンツを表示
    $(".js-content").hide().eq(index).fadeIn(300);


  }
   else {
    // ハッシュがない場合、最初のコンテンツを表示
    $(".js-content:first-of-type").css("display", "block");
  }
  
  // タブをクリックすると表示を切り替える処理
  $(".js-tab").on("click", function() {
    var tabId = $(this).attr('id');
    $('.js-tab').removeClass('is-current');
    $(this).addClass('is-current');
    $('.js-content').hide();
    $('#' + tabId + '-content').show();
    const index = $(this).index();
   // コンテンツを非表示にして、クリックしたタブのインデックス番号と同じコンテンツを表示
    $(".js-content").hide().eq(index).fadeIn(300);
  });
});









});//消さない



