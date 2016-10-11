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

var e = $("#contactForm");
    e.submit(function(o) {
        o.preventDefault();
        var t = $("input:submit", e),
            a = t.val();
        $.ajax({
            url: "//formspree.io/koni.ukraine@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function(e) {
                t.val("Сообщение отправлено"), setTimeout(function() {
                    t.attr("disabled", !1).val(a)
                }, 5e3)
            },
            error: function(e) {
                t.val("Произошла ошибка, попробуйте пожалуйста еще раз"), setTimeout(function() {
                    t.attr("disabled", !1).val(a)
                }, 5e3)
            }
        })
    })
