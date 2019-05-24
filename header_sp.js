var body = $('body');
var nav = $('.click-nav');
var menu = $('.menu-wrap');
var global = $('#global');

nav.on('click',function(){
	action();
});

var action = function(){
	if(nav.hasClass('is-active')){
		global.removeClass('is-active');
		nav.removeClass('is-active');
		menu.removeClass('is-active');
		body.removeClass('is-fixed');
		$('#pagetop').removeClass('is-none');
		var wrap = $('#body-wrap');
		wrap.remove();
	}else{
		global.addClass('is-active');
		nav.addClass('is-active');
		menu.addClass('is-active');
		body.addClass('is-fixed');
		body.append('<div id="body-wrap" />');
		$('#pagetop').addClass('is-none');
		var wrap = $('#body-wrap');
		wrap.on('click',function(){
			global.removeClass('is-active');
			nav.removeClass('is-active');
			menu.removeClass('is-active');
			body.removeClass('is-fixed');
			wrap.remove();
		});
	}
}


$(function(){
	$('.nav_list').click(function(){
		$(this).toggleClass('bg02').next().slideToggle();
		$('.nav_list').not($(this)).toggleClass('bg02').next().slideUp();
	});
});
