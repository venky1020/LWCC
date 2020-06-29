 $(document).ready(function(){
//		alert('JQUERY');


	//LINKEDIN
	$("#side-toolkit .toolkit-links a.linkedin").click(function(){
		$("#twitter-overlay, #facebook-overlay, #linkedin-overlay, #share-overlay, #blogs-overlay").hide();
		$("#linkedin-overlay").fadeIn(200);
	})
	$("#linkedin-overlay a.close").click(function(){
		$("#linkedin-overlay").fadeOut(200);
	})
	//Blogs
	$("#side-toolkit .toolkit-links a.blogs").click(function(){
		$("#twitter-overlay, #facebook-overlay, #linkedin-overlay, #share-overlay,").hide();
		$("#blogs-overlay").fadeIn(200);
	})
	$("#blogs-overlay a.close").click(function(){
		$("#blogs-overlay").fadeOut(200);
	})

	//FACEBOOK
	$("#side-toolkit .toolkit-links a.facebook").click(function(){
		$("#twitter-overlay, #linkedin-overlay, #share-overlay, #blogs-overlay").hide();
		$("#facebook-overlay").fadeIn(200);
	})
	$("#facebook-overlay a.close").click(function(){
		$("#facebook-overlay").fadeOut(200);
	})

	//TWITTER  
	$("#side-toolkit .toolkit-links a.twitter").click(function(){
		$("#facebook-overlay, #linkedin-overlay, #share-overlay, #blogs-overlay").hide();
		$("#twitter-overlay").fadeIn(200);
	})
	$("#twitter-overlay a.close").click(function(){
		$("#twitter-overlay").fadeOut(200);
	})

	//SHARE
	$("#side-toolkit .toolkit-links a.share").click(function(){
		$("#twitter-overlay, #facebook-overlay, #linkedin-overlay, #blogs-overlay").hide();
		$("#share-overlay").fadeIn(200);
	})
	$("#share-overlay a.close").click(function(){
		$("#share-overlay").fadeOut(200);
	})
	//SHARE - BOTTOM
	$("#footer .social-links a.share").click(function(){
		$("#twitter-overlay, #facebook-overlay, #linkedin-overlay, #blogs-overlay").hide();
		$("#share-overlay.bottom").fadeIn(200);
	})
	$("#share-overlay.bottom a.close").click(function(){
		$("#share-overlay.bottom").fadeOut(200);
	})


	//Check All and Uncheck All
	$("a.check-all-form").click(function(){
		var currentId = $(this).attr('id').substring(14);
		$("#form"+currentId+" .jqTransformCheckboxWrapper a.jqTransformCheckbox").addClass("jqTransformChecked");
		$("#form"+currentId+" input[type='checkbox']").attr('checked', true);
	})
	$("a.uncheck-all-form").click(function(){
		var currentId = $(this).attr('id').substring(16);
		$("#form"+currentId+" .jqTransformCheckboxWrapper a.jqTransformCheckbox").removeClass("jqTransformChecked");
		$("#form"+currentId+" input[type='checkbox']").attr('checked', false);
	})

	//Check All and Uncheck All - Sub boxes
	$("input.checkAllSubs").click(function(){
		if ($(this).hasClass("runningSub")) return;
		$(this).addClass("runningSub");
		var currentId = $(this).attr('id');
		var isChecked = !($(this).attr('checked') == "true" || $(this).attr('checked') == "checked");
		var subId = 0;
		while (subBox = $("#"+currentId+"_"+subId)) {
			if (!subBox.attr || !subBox.attr("type") || subBox.attr("type") != "checkbox") break;
			var subIsChecked = (subBox.attr('checked') == "true" || subBox.attr('checked') == "checked");
			if (isChecked != subIsChecked && !subBox.hasClass("runningSub")) {
				subBox.addClass("runningSub");
				subBox.click();
				subBox.removeClass("runningSub");
			}
			subId++;
		}
		$(this).removeClass("runningSub");
	})
	$("input.checkAllSub").click(function(){
		if ($(this).hasClass("runningSub")) return;
		$(this).addClass("runningSub");
		var currentId = $(this).attr('id');
		var isChecked = !($(this).attr('checked') == "true" || $(this).attr('checked') == "checked");
		var parentId = currentId.substring(0, currentId.lastIndexOf("_"));
		var parentBox = $("#"+parentId);
		if (parentBox.hasClass("runningSub")) {
			$(this).removeClass("runningSub");
			return;
		}
		var allSame = true;
		var subId = 0;
		var subBoxId = parentId+"_"+subId;
		while (subBox = $("#"+subBoxId)) {
			if (!subBox.attr || !subBox.attr("type") || subBox.attr("type") != "checkbox") break;
			if (subBoxId != currentId) {
				var subIsChecked = (subBox.attr('checked') == "true" || subBox.attr('checked') == "checked");
				if (subIsChecked != isChecked) {
					allSame = false;
					break;
				}
			}
			subId++;
			subBoxId = parentId+"_"+subId;
		}
		if (!parentBox.attr || !parentBox.attr("type") || parentBox.attr("type") != "checkbox") {
			$(this).removeClass("runningSub");
			return;
		}
		var parentIsChecked = (parentBox.attr('checked') == "true" || parentBox.attr('checked') == "checked");
		if (parentIsChecked && !allSame || (isChecked && !parentIsChecked && allSame)) {
			parentBox.addClass("runningSub");
			parentBox.click();
			parentBox.removeClass("runningSub");
		}
		$(this).removeClass("runningSub");
	})
	
	//$(".radio-overlay input[type='radio']").hide();
	$(".radio-overlay input[type='radio'][checked='checked']").each(function(){
		$(this).attr("checked", "checked");
	})
	$(".radio-overlay input[type='radio']").each(function(){
		var isChecked = ($(this).attr("checked") == "true" || $(this).attr("checked") == "checked");
		if (isChecked) {
			$(this).siblings("label").addClass("selected");
		}
		else {
			$(this).siblings("label").removeClass("selected");
		}
	})
	$(".radio-overlay label").click(function(){
		var tBaseId = $(this).attr("for").substring(0, 10);
		var radId = 0;
		var radioId = tBaseId+radId;
		while (tSibling = $("label[for='"+radioId+"']")) {
			if (!tSibling.attr || !tSibling.attr("for") || tSibling.attr("for") != radioId) break;
			if (radioId == $(this).attr("for")) {
				$(this).addClass("selected");
			}
			else {
				tSibling.removeClass("selected");
			}
			radId++;
			radioId = tBaseId+radId;
		}
	})

	//Search Filter
	$(".search-filter .select-col h3 a").click(function(){
		if($(this).hasClass("closed")){
			$(this).removeClass("closed")
		} else{
			$(this).addClass("closed")
		}
		$(this).parent("h3").next(".select-col-header").slideToggle();
		$(this).parent("h3").next().next(".select-col-data").slideToggle();
        $(this).parent("h3").next().next(".select-data-communities").slideToggle();
	})

	//Worldwide Dropdown
	$("li.worldwide").mouseover(function(){
		$(this).children("div.worldwide-dropdown-header").show();
		$(this).children("div.worldwide-dropdown").show();
	})
	$("li.worldwide").mouseout(function(){
		$(this).children("div.worldwide-dropdown-header").hide();
		$(this).children("div.worldwide-dropdown").hide();
	})

	//Menu Dropdown
	$("#menu ul li").mouseover(function(){
		$(this).children("div.dropdown").show();
	})
	$("#menu ul li").mouseout(function(){
		$(this).children("div.dropdown").hide();
	})
   //Menu Dropdown
	$("#imenu ul li").mouseover(function(){
		$(this).children("div.idropdown").show();
	})
	$("#imenu ul li").mouseout(function(){
		$(this).children("div.idropdown").hide();
	})

	//HOME HERO
	$('.home #slides').slides({
		preload: true,
		play: 8500,
		pause: 100,
		slideSpeed: 800,
		hoverPause: false
	});
	
	//COMMUNITY PAGE SLIDESHOW
	$('#slideshow').slides({
		preload: true,
		play: 8500,
		pause: 100,
		slideSpeed: 800,
		hoverPause: false
	});


	//LATEST NEWS
	$(".home .textdiv").jCarouselLite({
			horizontal: true,
			hoverPause: true,
			btnNext: ".latestnews-area .next",
			btnPrev: ".latestnews-area .prev",
			visible: 1,
			auto: 10000000,
			speed: 1500
	});


	$('.page #page-hero').slides({
		preload: true,
		effect: 'fade',
		crossfade: true,
		play: 8500,
		fadeSpeed: 500,
		generatePagination: false
	});
	

	$('.featured-video-slider').slides({
		preload: true,
		effect: 'slide',
		crossfade: true,
		fadeSpeed: 500,
		prev: 'prev-null',
		next: 'next-null',
		generatePagination: false
	});


	//Recent PowerCenter Customers
	$(".recent-powercenter-customers-slides").jCarouselLite({
			horizontal: true,
			hoverPause: true,
			btnNext: ".recent-powercenter-customers .next",
			btnPrev: ".recent-powercenter-customers .prev",
			visible: 1,
			auto: 5000,
			speed: 2000
	});


	$(".featured-video-listing").jCarouselLite({
			vertical: true,
			btnNext: ".featured-videos-container .next",
			btnPrev: ".featured-videos-container .prev",
			visible: 3,
			circular:false,
			speed: 500
	});
//*/
	//General Tab
    /*$(".tab-box .tab-contents").not(".tab-box .default-contents").hide();*/
	$(".tab-box .default-contents").show();
    if($('#container .default-contents').length) {
      $(".tab-box .tab-contents").not(".tab-box .default-contents").hide();
    }else{
      $(".tab-box .tab-contents").not(".tab-box .tab1-contents").hide();    
    }

    
    $('.forgot_password').click(function(){
      $('.login_main').hide();
      $('.retrieve_password').show();
    });

   $(".tab-box .tabs a.tab1").click(function(){
		$(this).addClass("selected").parent().siblings().children(".tab").removeClass("selected");
        $('.retrieve_password').hide();
        $('.login_main').show();
		$(this).parents(".tabs").siblings(".tab-contents").hide();
		$(this).parents(".tabs").siblings(".tab1-contents").show();
	});
	$(".tab-box .tabs a.tab2").click(function(){
		$(this).addClass("selected").parent().siblings().children(".tab").removeClass("selected");
		$(this).parents(".tabs").siblings(".tab-contents").hide();
		$(this).parents(".tabs").siblings(".tab2-contents").show();
	});
	$(".tab-box .tabs a.tab3").click(function(){
		$(this).addClass("selected").parent().siblings().children(".tab").removeClass("selected");
		$(this).parents(".tabs").siblings(".tab-contents").hide();
		$(this).parents(".tabs").siblings(".tab3-contents").show();
	});
    	$(".tab-box .tabs a.tab4").click(function(){
		$(this).addClass("selected").parent().siblings().children(".tab").removeClass("selected");
		$(this).parents(".tabs").siblings(".tab-contents").hide();
		$(this).parents(".tabs").siblings(".tab4-contents").show();
	});
        $(".tab-box .tabs a.tab5").click(function(){
		$(this).addClass("selected").parent().siblings().children(".tab").removeClass("selected");
		$(this).parents(".tabs").siblings(".tab-contents").hide();
		$(this).parents(".tabs").siblings(".tab5-contents").show();
	});
        $(".tab-box .tabs a.tab6").click(function(){
		$(this).addClass("selected").parent().siblings().children(".tab").removeClass("selected");
		$(this).parents(".tabs").siblings(".tab-contents").hide();
		$(this).parents(".tabs").siblings(".tab6-contents").show();
	});
        $(".tab-box .tabs a.tab7").click(function(){
		$(this).addClass("selected").parent().siblings().children(".tab").removeClass("selected");
		$(this).parents(".tabs").siblings(".tab-contents").hide();
		$(this).parents(".tabs").siblings(".tab7-contents").show();
	});

	//If there are more than 3 tabs, repeat these codes.
	//Color box
	//$("#side-toolkit .contact-us").colorbox({opacity:0,innerWidth:650, innerHeight:550});


	//Search box
	$("#search").blur(function(){
    if (this.defaultValue == this.value) this.value = '';
    else if (this.value == '') this.value = this.defaultValue;
	})
	$("#search").focus(function(){
    if (this.defaultValue == this.value) this.value = '';
    else if (this.value == '') this.value = this.defaultValue;
	})

	//Find Resource
	$("#find-resource").blur(function(){
    if (this.defaultValue == this.value) this.value = '';
    else if (this.value == '') this.value = this.defaultValue;
	})
	$("#find-resource").focus(function(){
    if (this.defaultValue == this.value) this.value = '';
    else if (this.value == '') this.value = this.defaultValue;
	})

	//Form Uniform
	$("#menu input, #menu textarea, #menu select, #menu button").uniform();
	$("form#search-body input,form#search-body select").uniform();
	$("select.make-selection").uniform();
	
	
	//Customer tabs
	
        var tabContainers = $('.customer-slider > div');
        tabContainers.hide().filter(':first').show();			
		$('ul.customer-tabs li a').click(function (){
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
		$('ul.customer-tabs li a').removeClass('active');
        $(this).addClass('active');
        return false;
    
});


});   // JQuery END.


$(document).ready(function() {
var tabContainers = $('.discussion-container .inner-tabs-data > div');
        tabContainers.hide().filter(':first').show();			
			$('.discussion-container ul.inner-tabs li a').click(function (){
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
			$('.discussion-container ul.inner-tabs li a').removeClass('active');
           $(this).addClass('active');
            return false;
	});
});

$(document).ready(function() {
var tabContainers = $('.documents-container .inner-tabs-data > div');
        tabContainers.hide().filter(':first').show();			
			$('.documents-container ul.inner-tabs li a').click(function (){
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
			$('.documents-container ul.inner-tabs li a').removeClass('active');
           $(this).addClass('active');
            return false;
	});
});

$(document).ready(function() {
var tabContainers = $('.face-com-container .inner-tabs-data > div');
        tabContainers.hide().filter(':first').show();			
			$('.face-com-container ul.inner-tabs li a').click(function (){
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
			$('.face-com-container ul.inner-tabs li a').removeClass('active');
           $(this).addClass('active');
            return false;
	});
});