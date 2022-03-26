(function ($) {

  "use strict";
    // COLOR MODE
    $('.color-mode').click(function(){
      var src1 = "./images/undraw/LOGO-01.svg";
      var src2 = "./images/undraw/logowhite-01.svg";
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    
   var src = $('#logo img').attr('src'); 
   if(src == src1){$('#logo img').attr('src',src2);}
   else{$('#logo img').attr('src',src1);}
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
