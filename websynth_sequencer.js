/*
 * websynth_sequencer.js
 *
 * This program is licensed under the MIT License.
 * Copyright 2012, aike (@aike1000)
 *
 */

$(function() {
	var n8 = 200;
	// J.S.Bach - Suite No 1 in G major BWV 1007 Prelude
	var sequence_note     = [
		 2,  9, 18, 16, 18,  9, 18,  9,
		 2,  9, 18, 16, 18,  9, 18,  9,
		 2, 11, 19, 18, 19, 11, 19, 11,
		 2, 11, 19, 18, 19, 11, 19, 11,
		 2, 13, 19, 18, 19, 13, 19, 13,
		 2, 13, 19, 18, 19, 13, 19, 13,
		 2, 14, 18, 16, 18, 14, 18, 14,
		 2, 14, 18, 16, 18, 14, 18, 14
	];
	var sequence_duration = [
		n8, n8, n8, n8, n8, n8, n8, n8,
		n8, n8, n8, n8, n8, n8, n8, n8,
		n8, n8, n8, n8, n8, n8, n8, n8,
		n8, n8, n8, n8, n8, n8, n8, n8,
		n8, n8, n8, n8, n8, n8, n8, n8,
		n8, n8, n8, n8, n8, n8, n8, n8,
		n8, n8, n8, n8, n8, n8, n8, n8,
		n8, n8, n8, n8, n8, n8, n8, n8
	];

	$('<img />').switch({
		id: 'play_button', image: 'images/play_button.png',
		left: 350, top: 500, width: 36, height: 36, value: 0,
		click: (function() { seq(0);} )
	}).appendTo('#draw');

	function seq_note_on(note) {
		p.play(note);
		$('#key_' + note).keypad("value", 1);
	};

	function seq_note_off(note) {
		p.stop(note);
		$('#key_' + note).keypad("value", 0);
	};

	function seq(pos) {
		if (pos >= sequence_note.length) {
			seq(0);
		} else if ($('#play_button').switch("value") == 1) {
			seq_note_on(sequence_note[pos]);
			setTimeout(function() {seq_note_off(sequence_note[pos]);}, sequence_duration[pos] - 10);
			setTimeout(function() {seq(pos + 1);}, sequence_duration[pos]);
		}
	};

});
