$(function(){

	$(".nav-menu > ul > li").hover(function(){
		$(".nav-box").css({'background-color':'rgba(255,255,255,1)'});
		$(this).find(".mdd-inner").stop().slideDown();		
	},function(){
		$(this).find(".mdd-inner").stop().slideUp();
	});
	
	$("#global").hover(function(){
		$(".nav-box").css({'background-color':'rgba(255,255,255,1)'});
	},function(){
		$.when(
			$(this).find(".mdd-inner").stop().slideUp()
		).done(function(){
			$(".nav-box").css({'background-color':'rgba(255,255,255,0.8)'});
		});
	});
	
});

$("header nav").cbSlideUpHeader({
"headerBarHeight" : 120,
"slideDownDuration": "slow",
"slideUpDuration": "fast",
"headroom": true,
"slidePoint": 10
});

