/*
 * jqskin switch
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

$.widget("jqskin.switch", $.ui.mouse, {
	options: {
		left: 100,
		top: 100,
		width: 32,
		height: 32,
		flames: 2,
		value: 0,
		image: "",
		clickable: true
	},

	_create: function(){
		this._mouseInit();

		var o = this.options;
		$(this.element)
			.attr({
				'id': o.id,
				'src': o.image
			})
			.css({
				'position':'absolute',
				'left': o.left
			});
		this._update();
	},

	destroy: function() {
		this._mouseDestroy();
		return this;
	},

	_mouseDown: function(event) {
		var o = this.options;
		if (o.clickable) {
			o.value = 1 - o.value;
			this._update();
			this._trigger("click", event);
		}
	},

	_update: function() {
		var o = this.options;
		if (o.value) {
			this.element.css({
				'top':o.top-o.height+'px',
				'clip':'rect('+o.height+'px, '+o.width+'px, '+o.height*2+'px, 0px)'
			});
		} else {
			this.element.css({
				'top':o.top+'px',
				'clip':'rect(0px, ' +o.width+'px, '+o.height+'px, 0px)'
			});
		}
	},

	value: function(v) {
		var o = this.options;
		if (arguments.length) {
			if ((v >= 0) && (v <= 1)) {
				o.value = v;
				this._update();
			}
			return;
		}
		return o.value;
	}
});

}(jQuery));
