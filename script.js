$(document).ready(function(){

//masked input
	var telInp = $('input[type="tel"]');   
	telInp.each(function(){
	  $(this).mask("+7 (999) 999-99-99");
	});

	$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(4);  // set position number
  });

// slick
  $('.works__carousel').slick({
	infinite: true,
	slidesToShow: 3,
	speed: 1000,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	cssEase: 'ease-in-out',
	dots: true,
	responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
  });

// smooth scroll
  $(function(){
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
		});
	});

// popups
	$('.callback, .header__callback_mobile').click(function(e) {
		e.preventDefault();
		$('.popup-callback').css('display', 'flex');
	});

	$('.popup-callback').click(function(e){
			if(event.target == this){
		$(this).hide();
	}; });

	$('.find-out-more, .see-price, .order').click(function(e) {
		e.preventDefault();
		$('.popup-find-out-more').css('display', 'flex');
	});

	$('.popup-find-out-more').click(function(e){
			if(event.target == this){
		$(this).hide();
	}; });

	$('.popup-callback__submit').click(function(e){
		e.preventDefault();
	});
	$('.popup-find-out-more__submit').click(function(e){
		e.preventDefault();
	});


	//burger
	$('.header__burger').click(function(e){
		e.preventDefault();
		$('.mobile__menu').slideToggle();
	});


  
});