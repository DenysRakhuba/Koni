// Navbar scrolling per block
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1300);
        event.preventDefault();
    });
});

$('.collapse').collapse();

$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
  	if(!$this.hasClass('panel-collapsed')) {
  		$this.parents('.panel').find('.panel-body').slideDown();
  		$this.addClass('panel-collapsed');
  		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
  	} else {
  		$this.parents('.panel').find('.panel-body').slideUp();
  		$this.removeClass('panel-collapsed');
  		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
  	}
});
$(document).ready(function() {
  $("#carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    items : 1,
    loop: true,
  });
  $("#carousel2").owlCarousel({
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    items : 1,
    loop: true,
  });
  $("#carousel3").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    items : 2,
    loop: true,
    responsiveClass:true,
		responsive:{
			700:{
				items:2
			},
			0:{
				items: 1
			},
		},
  });
});
