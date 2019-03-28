$(document).ready(function(){
  $('.works__carousel').slick({
	infinite: true,
	slidesToShow: 3,
	speed: 1000,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	cssEase: 'ease-in-out',
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



function draw() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext){
	var ctx = canvas.getContext('2d');
	var gradient = ctx.createLinearGradient(0, 0, 0, 290);
	gradient.addColorStop(0, "#ff2f96");
	gradient.addColorStop(1, "#ff8d5c");

	// Cubic curves example
	ctx.beginPath();
	ctx.moveTo(7,210);
	ctx.bezierCurveTo(15,125,103,16,215,10);
	ctx.bezierCurveTo(290,6,350,46,352,148);
	ctx.bezierCurveTo(345,240,290,287,165,285);
	ctx.bezierCurveTo(63,288,5,260,7,210);
	ctx.strokeStyle = gradient;
	ctx.fillStyle = gradient;


	ctx.stroke();
	ctx.fill();
  }
}

document.addEventListener("DOMContentLoaded", draw);