$(function(){
    'use strict';
    //Adjust header height
    var myHeader=  $('.header') 
    myHeader.height($(window).height());
    $(window).resize(function(){
        myHeader.height($(window).height()); 
    });
    //Links Add Active class
    $(".links li a").click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active')
    })
    
    //Trigger bxslider
    $('.slider').bxSlider({
        pager:false
    });
    //Smooth Scroll To div
    $('.links li a').click(function(){
        $('html,body').animate({
            scrollTop:$('#' +$(this).data('value')).offset().top
        },1000)
         //Trigger Mixitup
         $('#container').mixItUp();
         //Adjust Shuffle Links
         $('.shuffle li').click(function(){
           $(this).addClass('selected').siblings().removeClass('selected');  
         })
        
})
//Our Auto Slider Code
(function autoSlider(){
$('.cslider .active').each(function(){
   if(!$(this).is('last-child')) {
$(this).delay(3000).fadeOut(1000,function(){
    $(this).removeClass('active').next().addClass('active').fadeIn();
    autoSlider();
})
   } else{
       $(this).delay(3000).fadeOut(1000,function(){
           $(this).removeClass('active');
           $('.cslider div').eq(0).addClass('active').fadeIn();
           autoSlider();
       });
   }
})
}());
 //trigger nice scroll
 $('html').niceScroll({
     cursorcolor:'#1abc9c',
     cursorwidth:'10px',
     cursorborder:'1px solid #1abc9c',
     cursorborderradius:'0'
 });
 //Trigger Mixitup
$('#Container').mixItUp();
})
