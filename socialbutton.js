$(function() {
	$('#twitter').socialbutton('twitter', {
		button: 'horizontal',
		lang: 'en',
		text: 'WebSynth'
	});
	$('#facebook').socialbutton('facebook_like', {
		button: 'button_count'
	});
	$('#gplus1').socialbutton('google_plusone');
	$('#hatena').socialbutton('hatena', {
		button: '../common/img/append.gif'
	});
});
