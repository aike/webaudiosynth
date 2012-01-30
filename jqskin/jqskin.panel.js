/*
 * jqskin panel
 *   version 0.1.0
 *
 * This program is licensed under the MIT License.
 * Copyright 2011, aike (@aike1000)
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("jqskin.panel", {
	options: {
		left: 10,
		top: 10,
		image: ""
	},

	_create: function(){
		var o = this.options;
		$(this.element)
			.attr({
				'id': o.id,
				'src': o.image
			})
			.css({
				'position':'absolute',
				'left': o.left,
				'top': o.top
			});
	}

});

}(jQuery));
