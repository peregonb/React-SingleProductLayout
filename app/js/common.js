$(window).on('load', function () {

   if (getCookie("Timer").length) {
      var timeToExpire = parseInt(getCookie("Timer"));
      timeset(timeToExpire);
   } else {
      var daysLeft = parseInt($('.fourth-section-timerwrap').attr('data-days-left'));
      writeCookie("Timer", new Date().getTime() + daysLeft * 24 * 60 * 60 * 1000, daysLeft);
      setTimeout(function () {
         var timeToExpire = parseInt(getCookie("Timer"));
         timeset(timeToExpire);
      }, 1000);
   }

      $("*[data-href]").on("click", function (e) {
         e.preventDefault();
         var id  = $(this).attr('data-href'),
            top = $(id).offset().top;
         $('body,html').animate({scrollTop: top}, 1500);
      });

      $('.checkout-close').on('click', function(){
         $(this).closest($('.checkout')).removeClass('active');
         $('.checkout-click').removeClass('active');
      })
      $('.checkout-click').on('click', function(){
         $('.checkout-close').click();
      })

      $('.first-section-lang > .first-section-langItem').on('click', function(){
         $(this).parent().addClass('active');
      });
      $(document).on('click', function (e) {
         if (!$(e.target).parents().hasClass('active') &&
            !$(e.target).hasClass('active')) {
               $('.first-section-lang.active').removeClass('active');
         }
      });

      $('.first-section-langMenu .first-section-langItem').on('click', function(){
        var text = $(this).find($('.first-section-langText')).text();
        var imgSrc = $(this).find($('.first-section-langImg')).attr('src');
        $('.first-section-lang > .first-section-langItem .first-section-langText').text(text);
        $('.first-section-lang > .first-section-langItem .first-section-langImg').attr('src', imgSrc);
        
        $(this).closest($('.first-section-lang')).removeClass('active');
      });
  

})





$('.faq-top').on('click', function(){
$(this).closest($('.faq-item')).toggleClass('active');
$(this).closest($('.faq-item')).find($('.faq-bottom')).slideToggle(300);

$('.faq-top').not($(this)).closest($('.faq-item.active')).find($('.faq-bottom')).slideToggle(300);
$('.faq-top').not($(this)).closest($('.faq-item.active')).toggleClass('active');
});


if ($('.fourth-section-slider').length) {
   $('.fourth-section-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      // fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true
   });
}

$('.fourth-section-plus').on('click', function () {
   $('.fourth-section-input').val(parseInt($('.fourth-section-input').val()) + 1);
})
$('.fourth-section-minus').on('click', function () {
   if ($('.fourth-section-input').val() > 1) {
      $('.fourth-section-input').val(parseInt($('.fourth-section-input').val()) - 1);
   }
})


var slider_el = $('.fourth-section-item:not(.slick-cloned)'),
   img_length = slider_el.length + 1,
   i;
for (i = 1; i < img_length; i++) {
   $('.fourth-section-slider .slick-dots li:nth-child(' + i + ') button')
      .css('background-image', slider_el.eq(i - 1).attr('data-src'));
}


var stars = parseFloat($('.fourth-section-startext').attr('data-value')),
   starsFinal = stars * 100 / 5;
$('.fourth-section-starfull').css('width', starsFinal + '%');


$(window).on('load scroll', function () {

   if ($('.fourth-section-scalewrap:not(.active)').length) {
      if (isScrolledIntoView('.fourth-section-scalewrap:not(.active)') === true) {
         $('.fourth-section-scale').css('width', $('.fourth-section-scale').attr('data-width') + '%');
         $('.fourth-section-scalewrap').addClass('active');
      }
   }
})

function parallaxIt(e, target, movement, parent) {
   var $parent = $(parent);
   var relX = e.pageX - $parent.offset().left;
   var relY = e.pageY - $parent.offset().top;
   TweenMax.to(target, 1, {
      x: (relX - $parent.width() / 2) / $parent.width() * movement,
      y: (relY - $parent.height() / 2) / $parent.height() * movement
   });
}

function timeset(sometime) {
   var timer;

   var compareDate = sometime;

   timer = setInterval(function () {
      timeBetweenDates(compareDate);
   }, 1000);

   function timeBetweenDates(toDate) {
      var dateEntered = toDate;
      var now = new Date();
      var difference = dateEntered - now.getTime();

      if (difference <= 0) {

         // Timer done
         clearInterval(timer);

      } else {

         var seconds = Math.floor(difference / 1000);
         var minutes = Math.floor(seconds / 60);
         var hours = Math.floor(minutes / 60);
         var days = Math.floor(hours / 24);

         hours %= 24;
         minutes %= 60;
         seconds %= 60;

         if (days < 10) {
            days = "0" + days;
         }
         if (hours < 10) {
            hours = "0" + hours;
         }
         if (minutes < 10) {
            minutes = "0" + minutes;
         }
         if (seconds < 10) {
            seconds = "0" + seconds;
         }

         $("#days").text(days);
         $("#hours").text(hours);
         $("#minutes").text(minutes);
         $("#seconds").text(seconds);
      }
   }



}

function writeCookie(key, value, days) {
   var date = new Date();
   date.setTime(+date + (days * 86400000)); //24 * 60 * 60 * 1000

   window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

   return value;
};

function getCookie(c_name) {
   if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
         c_start = c_start + c_name.length + 1;
         c_end = document.cookie.indexOf(";", c_start);
         if (c_end == -1) {
            c_end = document.cookie.length;
         }
         return unescape(document.cookie.substring(c_start, c_end));
      }
   }
   return "";
}

function isScrolledIntoView(elem) {
   var docViewTop = $(window).scrollTop();
   var docViewBottom = docViewTop + $(window).height();

   var elemTop = $(elem).offset().top;
   var elemBottom = elemTop + $(elem).height();

   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}