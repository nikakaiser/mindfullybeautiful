$(function(){
         $("#leafeye").on({
          mouseenter: function(){
           $(this).attr('src','images/leafeye-bw.png');
         },
         mouseleave: function(){
           $(this).attr('src','images/leafeye.png');
         }
         });
         $("#mountainhair").on({
          mouseenter: function(){
           $(this).attr('src','images/mountainhair-bw.png');
         },
         mouseleave: function(){
           $(this).attr('src','images/mountainhair.png');
         }
         });
});

'use strict'


function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}



function desktopMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $(window).width() > 768) {
            $('header.desktop').fadeIn(500);
        } else {
            $('header.desktop').fadeOut(500);
        }
    })
}

//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
