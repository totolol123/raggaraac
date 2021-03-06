var endAnimation = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function animateStuff(pattern, type, callback) {

	$(pattern).addClass('animated ' + type).one(endAnimation, function() {

		$(this).removeClass('animated ' + type);
		callback();
	});
}

$('#btn-search').click(function() {

	animateStuff('#btn-search', 'wobble', function() {

	});
});

$('#nav_login').mouseover(function() {

	animateStuff('#nav_login', 'bounceIn', function() {

	});
});

$('#nav_register').mouseover(function() {

	animateStuff('#nav_register', 'bounceIn', function() {

	});
});

$('[id^=char_view]').mouseover(function() {

	animateStuff('#' + this.id, 'swing', function() {

	});
});

animateStuff('#news_info', 'bounceInLeft', function() {


});

animateStuff('#login_info', 'bounceInLeft', function() {


});

animateStuff('#register_info', 'bounceInLeft', function() {


});

animateStuff('#create_char', 'bounceInLeft', function() {


});

animateStuff('#show_player_0', 'bounceInLeft', function() {


});

animateStuff('#show_player_1', 'bounceInLeft', function() {


});

animateStuff('#show_player_2', 'bounceInLeft', function() {


});

animateStuff('#character_search', 'bounceInLeft', function() {


});

animateStuff('#highscores', 'bounceInLeft', function() {


});

animateStuff('#character_view', 'bounceInLeft', function() {


});
