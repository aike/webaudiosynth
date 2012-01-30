/*
 * websynth_gui.js
 *
 * This program is licensed under the MIT License.
 * Copyright 2012, aike (@aike1000)
 *
 */

$(function() {

	// Background
	$('<img />').panel({
		id: 'panel',
		image: 'images/websynth.png',
		left: 20,
		top: 20
	}).appendTo('#draw');


	var x = 109;
	var y = 332;
	var sx = 22;
	var n = 0;

	$('<img />').keypad({
		id: 'key_0',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(0);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_2',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(2);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_4',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(4);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_6',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(6);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_7',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(7);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_9',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(9);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_11',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(11);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_12',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(12);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_14',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(14);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_16',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(16);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_18',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(18);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_19',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(19);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_21',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(21);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_23',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(23);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_24',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(24);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_26',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(26);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_28',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(28);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_30',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(30);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_31',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(31);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_33',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(33);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_35',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(35);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_36',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(36);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_38',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(38);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_40',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(40);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_42',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(42);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_43',
		image: 'images/key_white.png', left: x + sx * n, top: y, width: 22, height: 112,
		mousedown: (function() {p.play(43);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;


	x = 124;
	n = 0;

	$('<img />').keypad({
		id: 'key_1',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(1);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_3',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(3);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_5',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(5);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n += 2;

	$('<img />').keypad({
		id: 'key_8',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(8);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_10',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(10);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n += 2;
	$('<img />').keypad({
		id: 'key_13',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(13);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_15',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(15);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_17',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(17);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n += 2;

	$('<img />').keypad({
		id: 'key_20',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(20);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_22',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(22);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n += 2;
	$('<img />').keypad({
		id: 'key_25',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(25);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_27',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(27);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_29',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(29);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n += 2;

	$('<img />').keypad({
		id: 'key_32',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(32);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_34',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(34);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n += 2;
	$('<img />').keypad({
		id: 'key_37',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(37);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_39',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(39);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;
	$('<img />').keypad({
		id: 'key_41',
		image: 'images/key_black.png', left: x + sx * n, top: y, width: 12, height: 64,
		mousedown: (function() {p.play(41);}), mouseup:   (function() {p.stop();})
	}).appendTo('#draw');
	n++;


	// knob
	$('<img />').knob({
		id: 'knob01', image: 'images/knob01.png',
		left: 60, top: 122, width: 48, height: 48, value: 10,
		change: (function() {
			p.vco1.set_glide_time($(this).knob("value"));
			p.vco2.set_glide_time($(this).knob("value"));
		})
	}).appendTo('#draw');

	$('<img />').switch({
		id: 'sw03', image: 'images/sw02.png',
		left: 60, top: 333, width: 32, height: 32, value: 1,
		click: (function() {
			p.vco1.set_glide_on($(this).switch("value"));
			p.vco2.set_glide_on($(this).switch("value"));
		})
	}).appendTo('#draw');


	$('<img />').knob({
		id: 'knob02', image: 'images/knob02.png',
		left: 145, top: 105, width: 40, height: 40, flames: 3, value: 50, sense: 100,
		change: (function() { p.vco1.set_pitch($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob03', image: 'images/knob02.png',
		left: 145, top: 188, width: 40, height: 40, flames: 3, value: 0, sense: 100,
		change: (function() { p.vco2.set_pitch($(this).knob("value"));} )
	}).appendTo('#draw');
	p.vco2.set_pitch(0);

	$('<img />').knob({
		id: 'knob04', image: 'images/knob01.png',
		left: 200, top: 100, width: 48, height: 48, value: 50,
		change: (function() { p.vco2.set_fine($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob05', image: 'images/knob01.png',
		left: 200, top: 183, width: 48, height: 48, value: 50,
		change: (function() { p.vco2.set_fine($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob05.5', image: 'images/knob02.png',
		left: 260, top: 105, width: 40, height: 40, flames: 3, value: 50, sense: 100,
		change: (function() { p.vco1.set_wave($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob05.6', image: 'images/knob02.png',
		left: 260, top: 188, width: 40, height: 40, flames: 3, value: 50, sense: 100,
		change: (function() { p.vco2.set_wave($(this).knob("value"));} )
	}).appendTo('#draw');


	$('<img />').knob({
		id: 'knob06', image: 'images/knob01.png',
		left: 325, top: 100, width: 48, height: 48, value: 50,
		change: (function() { p.vco1.set_gain($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').switch({
		id: 'sw01', image: 'images/sw01.png',
		left: 376, top: 108, width: 32, height: 32, value: 1,
		click: (function() { p.vco1.set_on($(this).switch("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob07', image: 'images/knob01.png',
		left: 325, top: 180, width: 48, height: 48, value: 50,
		change: (function() { p.vco2.set_gain($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').switch({
		id: 'sw02', image: 'images/sw01.png',
		left: 376, top: 188, width: 32, height: 32, value: 1,
		click: (function() { p.vco2.set_on($(this).switch("value"));} )
	}).appendTo('#draw');


	$('<img />').knob({
		id: 'knob07.5', image: 'images/knob01.png',
		left: 423, top: 80, width: 48, height: 48, value: 50,
		change: (function() { p.filter.set_freq($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob07.6', image: 'images/knob01.png',
		left: 480, top: 80, width: 48, height: 48, value: 50,
		change: (function() { p.filter.set_q($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob07.7', image: 'images/knob01.png',
		left: 537, top: 80, width: 48, height: 48, value: 50,
		change: (function() { p.filter.set_amount($(this).knob("value"));} )
	}).appendTo('#draw');


	$('<img />').knob({
		id: 'knob08', image: 'images/knob01.png',
		left: 423, top: 133, width: 48, height: 48, value: 0,
		change: (function() { p.feg.set_a($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob09', image: 'images/knob01.png',
		left: 480, top: 133, width: 48, height: 48, value: 20,
		change: (function() { p.feg.set_d($(this).knob("value")); p.feg.set_r($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob10', image: 'images/knob01.png',
		left: 537, top: 133, width: 48, height: 48, value: 100,
		change: (function() { p.feg.set_s($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob11', image: 'images/knob01.png',
		left: 423, top: 200, width: 48, height: 48, value: 0,
		change: (function() { p.eg.set_a($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'kb_volume', image: 'images/knob01.png',
		left: 480, top: 200, width: 48, height: 48, value: 20,
		change: (function() { p.eg.set_d($(this).knob("value")); p.eg.set_r($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob13', image: 'images/knob01.png',
		left: 537, top: 200, width: 48, height: 48, value: 100,
		change: (function() { p.eg.set_s($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'knob10', image: 'images/knob01.png',
		left: 615, top: 85, width: 48, height: 48, value: 50,
		change: (function() { p.volume.set($(this).knob("value"));} )
	}).appendTo('#draw');

	$('<img />').knob({
		id: 'kb_delay', image: 'images/knob01.png',
		left: 615, top: 160, width: 48, height: 48, value: 20,
		change: (function() { p.delay.set($(this).knob("value"));} )
	}).appendTo('#draw');

});
