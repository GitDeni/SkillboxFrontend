$(document).ready(function(){
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
      breakpoint: 1024,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	/*nextArrow: '<button class="next"><div class="mask"></div></button>',
	prevArrow: '<button class="prev"></button>',*/
  });



  $(function(){
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
		});
	});

  
});
