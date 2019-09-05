(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game puzzle_atlas_", frames: [[269,269,267,202],[473,473,267,202],[538,269,202,202],[0,0,267,267],[269,0,267,267],[538,0,202,267],[0,538,267,267],[0,269,267,267],[269,473,202,267]]}
];


// symbols:



(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_29 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_30 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_31 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_32 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_33 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_34 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_35 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_36 = function() {
	this.initialize(ss["game puzzle_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.kepingMC_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_28();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-50.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.5,-50.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50.5,-50.5,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_31();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50.5,-82.8,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50.5,-82.8,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_33();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-50.5,-82.8,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_34();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-50.5,-82.8,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_35();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50.5,-82.8,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_36();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50.5,-82.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.kepingMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.kepingMC_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(16.3,0,1,1,0,0,0,16.3,0);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-82.8,133.5,133.5);


// stage content:
(lib.gamepuzzle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		var game:MovieClip;
		var lebarPuzzle:int = 4;
		var tinggiPuzzle:int = 3;
		 
		function buatPuzzle(px:int, py:int):void{
			//movieclip game digunakan sebagai container untuk mempermudah pengaturan
			game = new MovieClip();
			game.x = px;
			game.y = py;
			addChild(game);
			//tambahkan puzzle dengan operasi for
			for (var i:int = 0; i < tinggiPuzzle;i++){
				for (var j:int = 0; j < lebarPuzzle; j++){
					var keping:kepingMC = new kepingMC;
					keping.x = j*100;
					keping.y = i*100;
					aturKeping(keping, i, j);
					game.addChild(keping);
				}
			}	
		}
		 
		function aturKeping(ob:Object, i:int, j:int):void{
			//mengatur kepingan bagian atas
			if (i == 0 && j == 0) ob.gotoAndStop(1);
			if (i == 0 && j > 0 && j < lebarPuzzle-1) ob.gotoAndStop(2);
			if (i == 0 && j == lebarPuzzle-1 ) ob.gotoAndStop(3);
			//mengatur kepingan bagian tengah
			if (i > 0 && i < tinggiPuzzle - 1 && j == 0) ob.gotoAndStop(4);
			if (i > 0 && i < tinggiPuzzle - 1 && j > 0 && j < lebarPuzzle-1) ob.gotoAndStop(5);
			if (i > 0 && i < tinggiPuzzle - 1 && j == lebarPuzzle-1 ) ob.gotoAndStop(6);
			//mengatur kepingan bagian tengah
			if (i == tinggiPuzzle - 1 && j == 0) ob.gotoAndStop(7);
			if (i == tinggiPuzzle - 1 && j > 0 && j < lebarPuzzle-1) ob.gotoAndStop(8);
			if (i == tinggiPuzzle - 1 && j == lebarPuzzle-1 ) ob.gotoAndStop(9);
		}
		 
		buatPuzzle(250, 140);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '32485E04A1CFF842AB6BF118A2951BDD',
	width: 800,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game puzzle_atlas_.png?1567479722115", id:"game puzzle_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['32485E04A1CFF842AB6BF118A2951BDD'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;