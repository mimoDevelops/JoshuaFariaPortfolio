$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","#034694");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });
    
	$("#nav option").click(function(){
        $("#choose").text($(this).text());
        $(this).parent().hide();
    });
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	});
	
	
	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */	
	
	
    // portfolio filtering

    $(".project-wrapper").mixItUp();
	
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */	
	
	$('#facts').parallax("50%", 0.3);
	
	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
	
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
	
});


	/* ========================================================================= */
	/*	message after email
	/* ========================================================================= */
	

function ajaxpost () {
	// (A) GET FORM DATA
	var form = document.getElementById("contact-form");
	var data = new FormData(form);
   
	// (B) AJAX REQUEST
	// (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
	fetch("index.html", { method:"POST", body:data })
	.then(res=>res.text())
   
	// (B2) SHOW MESSAGE ON SERVER RESPONSE
	.then((response) => {
	  console.log(response);
	  if (response == "OK") { alert("Speak to you soon !"); }
	  else { alert("Speak to you soon !"); }
	})
   
	// (B3) OPTIONAL - HANDLE FETCH ERROR
	.catch((err) => { console.error(err); });
   
	// (C) PREVENT FORM SUBMIT
	return false;
  }


