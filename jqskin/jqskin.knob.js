/*
 * jqskin knob
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

$.widget("jqskin.knob", $.ui.mouse, {
	options: {
		left: 100,
		top: 100,
		width: 32,
		height: 32,
		flames: 31,
		min: 0,
		max: 100,
		sense: 250,
		value: 0,
		image: ""
	},

	_create: function() {
		this._flame = -1;
		this._step = 0;
		this._mouseSliding = false;
		this._baseValue = 0;
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

	_mouseCapture: function( event ) {
		var o = this.options;
		this._baseValue = o.value;
		this._mouseSliding = true;
		this._clickOffset = event.pageY;
		return true;
	},

	_mouseStart: function( event ) {
		this._trigger("start", event);
		return true;
	},

	_mouseDrag: function( event ) {
		var o = this.options,
			position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		if (o.value != normValue) {
			o.value = normValue;
			this._trigger("change", event);
			this._update();
		}

		return false;
	},

	_mouseStop: function( event ) {
		this._mouseSliding = false;
		this._trigger("stop", event);
		this._trigger("change", event);
		return false;
	},

	_normValueFromMouse: function( position ) {
		var o = this.options;
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		pixelTotal = o.sense;
		pixelMouse = position.y - this._clickOffset;

		percentMouse = -1 * ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		} else if ( percentMouse < -1 ) {
			percentMouse = -1;
		}

		valueTotal = o.max - o.min;
		valueMouse = o.min + percentMouse * valueTotal;
		valueMouse += this._baseValue;
		if (valueMouse > o.max)
			valueMouse = o.max;
		else if (valueMouse < o.min)
			valueMouse = o.min;

		return valueMouse;
	},

	_update: function() {
		var o = this.options;
		var flame = Math.floor(o.flames * (o.value - o.min) / (o.max - o.min + 1));
		if (this._flame != flame) {
			this._flame = flame;
			this.element.css({
				'top': (o.top - (o.height * flame)) + 'px',
				'clip':'rect('+ (o.height * flame) +'px, '+o.width+'px, '+ (o.height * (flame + 1)) +'px, 0px)'
			});
		}
	},

	value: function(v) {
		var o = this.options;
		if (arguments.length) {
			if ((v >= o.min) && (v <= o.max)) {
				o.value = v;
				this._update();
			}
			return;
		}
		return o.value;
	}
});

}(jQuery));
