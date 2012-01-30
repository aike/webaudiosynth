/*
 * websynth_dsp.js
 *
 * This program is licensed under the MIT License.
 * Copyright 2012, aike (@aike1000)
 *
 */

///////////// BROWSER CHECK /////////////////////
window.addEventListener('load', init, false);
function init() {
	try {
		var context = new webkitAudioContext();
	} catch(e) {
		alert('Web Audio API is not supported in this browser');
	}
};

///////////// GLIDE /////////////////////
var Glide = function() {
	this.time  = 10;
	this.delta = 1 / (this.time * 100 + 1);
	this.on    = 1;
	this.current_pitch = -1;
	this.goal_pitch    = -1;
	this.cnt = 0;
};

Glide.prototype.set_goal = function(val) {
	this.goal_pitch = val;
};

Glide.prototype.next = function(p) {
	if (this.on == 0)
		return p;
	else if (Math.abs(p - this.current_pitch) < Math.abs(this.delta)) {
		this.current_pitch = p;
		return p;
	} else {

		this.cnt++;
		if (this.cnt % (this.time * 10) == 0) {
			this.current_pitch += this.delta;
			this.cnt = 0;
		}

		return this.current_pitch;
	}
};

Glide.prototype.set_time = function(val) {
	this.time = val;
	this.delta = 1 / (val * 100 + 1);
};

Glide.prototype.set_on = function(val) {
	this.on = val;
};

///////////// Init Parameter /////////////////////
//var stream_length = 4096;
var stream_length = 1024;

///////////// VCO /////////////////////
var WAVE = {
	TRI		: 0,
	SAW		: 1,
	SQUARE	: 2
};

var VCO = function(samplerate) {
	this.frequency = 110;
    this.phase = 0.0;
    this.phaseStep = this.frequency / samplerate;

	this.oct   = 12;
	this.fine  = 0;
	this.wave  = WAVE.SAW;
	this.gain  = 0.5;
	this.on    = 1;

	this.glide = new Glide();
};

VCO.prototype.SquareNext = function(p) {
	var phase = this.phase;
	var w = 2 / p;
	if (phase > w)		// if (this.phase * p * Math.PI > 2 * Math.PI)
		phase -= w;
	var ret = phase * p > 1 ? 0.8 : -0.8;
    this.phase = phase + this.phaseStep;
    return ret;
};

VCO.prototype.SawNext = function(p) {
	var phase = this.phase;
	var w = 2 / p;
	if (phase > w)
		phase -= w;
	var r = phase * p;
    var ret = r - 1;
    this.phase = phase + this.phaseStep;
    return ret;
};

VCO.prototype.TriNext = function(p) {
	var phase = this.phase;
	var w = 2 / p;
	if (phase > w)
		phase -= w;
	var r = phase * p;
    var ret = 2 * ((r >= 1 ? 2 - r : r) - 0.5);
    this.phase = phase + this.phaseStep;
    return ret;
};

VCO.prototype.next = function(p) {
	var stream = [];
	var i, imax;
	if (this.on == 1) {
		switch (this.wave) {
			case WAVE.TRI:
				for (i = 0, imax = stream_length; i < imax; i++)
					stream[i] = this.TriNext(this.glide.next(p)) * this.gain;
				break;
			case WAVE.SAW:
				for (i = 0, imax = stream_length; i < imax; i++)
					stream[i] = this.SawNext(this.glide.next(p)) * this.gain;
				break;
			case WAVE.SQUARE:
				for (i = 0, imax = stream_length; i < imax; i++)
					stream[i] = this.SquareNext(this.glide.next(p)) * this.gain;
				break;
		}
	} else {
		for (i = 0, imax = stream_length; i < imax; i++) {
			stream[i] = 0;
		}
	}
	return stream;
};

VCO.prototype.set_pitch = function(p) {
	this.oct = Math.floor((p + 25) / 50) * 12;
};

VCO.prototype.set_fine = function(p) {
	this.fine = (p - 50) / 100;
};

VCO.prototype.set_wave = function(val) {
	this.wave = Math.floor((val + 25) / 50);
};

VCO.prototype.set_gain = function(val) {
	this.gain = val / 100;
};

VCO.prototype.set_on = function(val) {
	this.on = val;
};

VCO.prototype.set_glide_time = function(val) {
	this.glide.set_time(val);
};

VCO.prototype.set_glide_on = function(val) {
	this.glide.on = val;
};

VCO.prototype.set_goal_pitch = function(val) {
	this.glide.goal_pitch = val;
};

VCO.prototype.glide_init = function(p) {
	if (this.glide.current_pitch == -1)
		this.glide.current_pitch = p;
	this.glide.goal_pitch = p;
	this.glide.delta = (p - this.glide.current_pitch) / 50;
};

///////////// EG /////////////////////

var EGM = {
	Idle    : 0,
	Attack  : 1,
	Decay   : 2,
	Sustain : 3,
	Release : 4
};

var EG = function() {
	this.gain = 0.0;
	this.time = 0;
	this.mode = EGM.Idle;
	this.a = 0;
	this.d = 20;
	this.s = 100 / 100;
	this.r = 20;

	this.a_max = 100;
	this.d_max = 100;
	this.r_max = 100;

	this.a_delta = 1.0 / (this.a * 500 + 1);
	this.d_delta = 1.0 / ((this.d + 5) * 1000 + 1);
	this.r_delta = 1.0 / (this.r * 1000 + 1);
};

EG.prototype.set_a = function(val) {
	this.a = val;
	this.a_delta = 1.0 / (this.a * 500 + 1);
};
EG.prototype.set_d = function(val) {
	this.d = val;
	this.d_delta = 1.0 / ((this.d + 5) * 1000 + 1);
};
EG.prototype.set_s = function(val) {
	this.s = val / 100.0;
};
EG.prototype.set_r = function(val) {
	this.r = val;
	this.r_delta = 1.0 / (this.r * 1000 + 1);;
};

EG.prototype.note_on = function() {
	this.gain = 0.0;
	this.time = 0;
	this.mode = EGM.Attack;
};

EG.prototype.note_off = function() {
	this.mode = EGM.Release;
};

EG.prototype.next = function() {
	this.time = 0;

	switch (this.mode) {
		case EGM.Attack:
			this.gain += this.a_delta;
			if (this.gain >= 1.0) {
				this.gain = 1.0;
				this.mode = EGM.Decay;
			}
			break;
		case EGM.Decay:
			this.gain -= this.d_delta;
			if (this.gain <= this.s) {
				this.gain = this.s;
				this.mode = EGM.Sustain;
			}
			break;
		case EGM.Sustain:
			break;
		case EGM.Release:
			this.gain -= this.r_delta;
			if (this.gain <= 0.0) {
				this.gain = 0.0;
				this.mode = EGM.Idle;
			}
			break;
	}
};


///////////// VOLUME /////////////////////
var CTL_Volume = function(ctx) {
	this.volume = ctx.createGainNode();
    this.volume.gain.value = 0.5;
};

CTL_Volume.prototype.set = function(val) {
    this.volume.gain.value = val / 100.0;
};

CTL_Volume.prototype.connect = function(next_node) {
	this.volume.connect(next_node);
};

CTL_Volume.prototype.getnode = function() {
	return this.volume;
};

///////////// DELAY /////////////////////
var FX_Delay = function(ctx) {
	this.wet = 0.2;
	this.delaytime = 0.8;
    this.delay1 = ctx.createDelayNode();
    this.delay2 = ctx.createDelayNode();
	this.gain1 = ctx.createGainNode();
	this.gain2 = ctx.createGainNode();

    this.delay1.delayTime.value = this.delaytime * 0.5;
    this.delay2.delayTime.value = this.delaytime * 1.0;
    this.gain1.gain.value = this.wet * 0.25;
    this.gain2.gain.value = this.wet * 0.125;

	this.gain1.connect(this.delay1);
	this.gain2.connect(this.delay2);
};

FX_Delay.prototype.set = function(val) {
	this.wet = val / 100.0;
    this.gain1.gain.value = this.wet * 0.25;
    this.gain2.gain.value = this.wet * 0.125;
};

FX_Delay.prototype.connect = function(next_node) {
	this.delay1.connect(next_node);
	this.delay2.connect(next_node);
};

FX_Delay.prototype.getnode1 = function() {
	return this.gain1;
};

FX_Delay.prototype.getnode2 = function() {
	return this.gain2;
};


///////////// FILTER /////////////////////
var CTL_Filter = function(ctx) {
	this.base_freq = 50;
	this.eg = 0;
	this.amount = 0.5;
	this.freq = Math.min(100, this.base_freq + this.eg * this.amount * 100);
    this.lowpass = ctx.createBiquadFilter();
	this.lowpass.type = 0;
	this.lowpass.frequency.value = 300 + Math.pow(2.0, (this.freq + 30) / 10);
	this.lowpass.Q.value = 50 / 5;
};

CTL_Filter.prototype.set_freq = function(f) {
	this.base_freq = f;
	this.freq = Math.min(100, this.base_freq + this.eg * 100);
	this.lowpass.frequency.value = 300 + Math.pow(2.0, (this.freq + 30) / 10);
};

CTL_Filter.prototype.set_q = function(q) {
	this.lowpass.Q.value = q / 5;
};

CTL_Filter.prototype.set_eg = function(val) {
	this.eg = val;
	this.freq = Math.min(100, this.base_freq + this.eg * this.amount * 100);
	this.lowpass.frequency.value = 300 + Math.pow(2.0, (this.freq + 30) / 10);
};

CTL_Filter.prototype.set_amount = function(val) {
	this.amount = val / 100;
	this.freq = Math.min(100, this.base_freq + this.eg * this.amount * 100);
	this.lowpass.frequency.value = 300 + Math.pow(2.0, (this.freq + 30) / 10);
};

CTL_Filter.prototype.connect = function(next_node) {
	this.lowpass.connect(next_node);
};

CTL_Filter.prototype.getnode = function() {
	return this.lowpass;
};



///////////// SYNTH MAIN /////////////////////
var WebSynth = function() {
    this.context = new webkitAudioContext();
    this.root = this.context.createJavaScriptNode(stream_length, 1, 1);
	this.vco1 = new VCO(this.context.sampleRate);
	this.vco2 = new VCO(this.context.sampleRate);
	this.eg = new EG();
	this.feg = new EG();

	this.filter = new CTL_Filter(this.context);
	this.volume = new CTL_Volume(this.context);
	this.delay = new FX_Delay(this.context);

	this.root.connect(this.filter.getnode());
	this.filter.connect(this.volume.getnode());
	this.volume.connect(this.context.destination);
	this.volume.connect(this.delay.getnode1());
	this.volume.connect(this.delay.getnode2());
	this.delay.connect(this.context.destination);


/*
	root -> filter -> volume -> dest
                             -> delay.node1 -> dest
                             -> delay.node2 -> dest
*/

};

WebSynth.prototype.play = function(n) {
	this.eg.note_on();
	this.feg.note_on();
    var f1 = Math.pow(2.0, (this.vco1.oct + n - 4 + this.vco1.fine) / 12.0);
    var f2 = Math.pow(2.0, (this.vco2.oct + n - 4 + this.vco2.fine) / 12.0);
	this.vco1.glide_init(f1);
	this.vco2.glide_init(f2);

	var self = this;
    this.root.onaudioprocess = function(event) {
		self.filter.set_eg(self.feg.gain);
        var Lch = event.outputBuffer.getChannelData(0);
        var Rch = event.outputBuffer.getChannelData(1);
        var s1 = self.vco1.next(f1);
        var s2 = self.vco2.next(f2);
        var i;
		if (self.eg.mode == EGM.Idle) {
	        for (i = 0; i < Lch.length; i++) {
				Lch[i] = 0;
				Rch[i] = 0;
			}
		} else {
	        for (i = 0; i < Lch.length; i++) {
				Lch[i] = (s1[i] + s2[i]) * self.eg.gain;
				Rch[i] = Lch[i];
				self.eg.next();
				self.feg.next();
			}
		}
    };
};

WebSynth.prototype.stop = function() {
	this.eg.note_off();
	this.feg.note_off();
};

var p = new WebSynth();

