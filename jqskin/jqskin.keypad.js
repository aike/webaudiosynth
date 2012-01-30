/*
 * jqskin keypad
 *   version 0.1.0
 *
 * This program is licensed under the MIT License.
 * Copyright 2012, aike (@aike1000)
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("jqskin.keypad", $.ui.mouse, {
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
		var self = this;
		this._mouseInit();
		this.element.bind('mouseup.'+this.widgetName, function(event) {
			return self._mouseUp(event);
		})

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

/*
	_mouseCapture: function( event ) {
console.log("capture");
		return true;
	},

	_mouseStart: function( event ) {
console.log("start");
		var o = this.options;
		if (o.clickable) {
			this._trigger("start", event);
		}
	},
*/

	_mouseDown: function( event ) {
		var o = this.options;
		if (o.clickable) {
			o.value = 1;
			this._update();
			this._trigger("mousedown", event);
		}
	},

	_mouseUp: function( event ) {
		var o = this.options;
		if (o.value == 1) {
			if (o.clickable) {
				o.value = 0;
				this._update();
				this._trigger("mouseup", event);
			}
			return false;
		} else {
			return true;
		}
	},

/*
	_mouseDrag: function( event ) {
//console.log("drag");
		this._update();
		return false;
	},

	_mouseStop: function( event ) {
console.log("stop");
		return this._mouseUp(event);
	},
*/

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
