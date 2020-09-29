(function($) {

/*Google Map Style*/
var CustomMapStyles  = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	
  
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};


//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}




if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        //icon:'map-marker.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}





/*----- End of Milon -----*/

// footer slide menu

if (windowWidth <= 767) {
  $('.ftr-col h6').on('click', function(){
    $(this).toggleClass('active');
    $(this).parent().siblings().find('h6').removeClass('active');
    $(this).parent().find('ul').slideToggle(300);
    $(this).parent().siblings().find('ul').slideUp(300);
  });

}

// body animate
$('.about-btn-scroll').click(function(e) {
    e.preventDefault();
    var goto = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(goto).offset().top - 0
    }, 800);
});

var allPanels = $('.map-accordion-des').hide();
$('.map-accordion-tab-row').removeClass('remove-border');
  $('.map-accordion-title').click(function() {
        allPanels.slideUp();
        $('.map-accordion-title').removeClass('map-accordion-active');
        $('.map-accordion-tab-row').removeClass('remove-border');
        $(this).next().slideDown();
        $(this).addClass('map-accordion-active');
        $(this).parent().next().addClass('remove-border');
        return false;
});





if( $('.blg-tabs-slider').length ){
    $('.blg-tabs-slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

if( $('.ApFieldRadioTypeSlider').length ){
    $('.ApFieldRadioTypeSlider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            dots: false
          }

        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            slidesToScroll: 1,
            dots: false
          }

        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

/*if( $('.ApFieldRadioTypeSlider').length ){
    $('.ApFieldRadioTypeSlider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            centerMode: true,
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}*/


/*
-----------------------
Start Contact Google Map ->> 
-----------------------
*/
if( $('#googlemap').length ){
    var latitude = $('#googlemap').data('latitude');
    var longitude = $('#googlemap').data('longitude');

    var myCenter= new google.maps.LatLng(latitude,  longitude);
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    function initialize(){
        var mapProp = {
          center:myCenter,

          mapTypeControl:false,
          scrollwheel: false,

          zoomControl: false,
          disableDefaultUI: true,
          zoom:17,
          streetViewControl: false,
          rotateControl: false,
          mapTypeId:google.maps.MapTypeId.ROADMAP,
          styles : CustomMapStyles
      };
      var map= new google.maps.Map(document.getElementById('googlemap'),mapProp);

      var marker= new google.maps.Marker({
        position:myCenter,
        icon:'assets/images/map-marker.png'
        });
      marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
}



 


     $('.slider-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-single',
      dots: false,
      arrows: true,
      //centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });


if( $('.dgProductSlider').length ){
    $('.dgProductSlider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });
}


/*----- End of Noyon -----*/

/*if (windowWidth <= 1199){
  if( $('.hmgiTopSlide').length ){
    $('.hmgiTopSlide').slick({
      dots: true,
      arrows: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  };
}*/

/*if (windowWidth <= 1199){
  if( $('.hmgiBottomSlide').length ){
    $('.hmgiBottomSlide').slick({
      dots: true,
      arrows: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  };
}*/


$(".wishlist-process ul li a").click(function(){
  var tagid = $(this).data('tag');
  $(".wishlist-process ul li a").removeClass('current');
  $(".wishlist-tab-con").removeClass('current');
  $(this).addClass('current');
  $("#"+tagid).addClass('current');

});






/*----- End of Shoriful -----*/





$('div.fl-tabs button').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('div.fl-tabs button').removeClass('current');
    $('.fl-tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
});
if( $('.grid').length ){
  $('.grid').masonry({
    itemSelector: '.grid-item'
  });
}


if( $('.pageBnrSlider').length ){
    $('.pageBnrSlider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
}
if( $('.hsmSlider').length ){
    $('.hsmSlider').slick({
      dots: true,
      arrows: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
}

if($('.hdr-search').length){
    $('.hdr-search').on('click', function(){
      $('body').addClass('hdr-search-popup-active');
    });
}
if($('.cross').length){
    $('.cross').on('click', function(){
      $('body').removeClass('hdr-search-popup-active');
    });
}

/*if( $('.tooltipButton').length ){
  $('.tooltipButton').toolbar({
    content: '#toolbar-options',
  });
}*/


/*$('.msd-tooltip').jBox('Tooltip', {
  adjustPosition: true,
  adjustTracker: true
});*/
/*new jBox('Modal', {
  width: 300,
  height: 100,
  attach: '#myModal',
});*/
 
/* $('#myModal').jBox('Modal', {
  adjustPosition: true,
  adjustTracker: true
});*/



/*----- End of Rannojit -----*/



    new WOW().init();

})(jQuery);