app.scene.engine={
	t:0,
	clock:{},
	init:function(){
		// Init var for model animation
		this.t = 0;
		this.clock = new THREE.Clock();

		//  Animation loop
		 window.requestAnimFrame = (function(){
	      return  window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    || 
	              window.oRequestAnimationFrame      || 
	              window.msRequestAnimationFrame     || 
	              function( callback ){
	                window.setTimeout(callback, 1000 / 60);
	              };
	    })();
	    (function gameLoop(){
	    	requestAnimFrame(gameLoop);
	    	app.scene.engine.gameRender(app.settings);
	    })()
	},
	gameRender:function(settings){
		settings.renderer.render(settings.scene, settings.camera );
		

		this.animatePlayer(settings.player.skin);

	},
	animatePlayer:function(skin){
		var delta = this.clock.getDelta();

		if ( this.t > 1 ) this.t = 0;

		if ( skin && app.settings.gogo==true) {
			for ( var i = 0; i < skin.morphTargetInfluences.length; i++ ) {
				skin.morphTargetInfluences[ i ] = 0;
			}

			skin.morphTargetInfluences[ Math.floor( this.t * 30 ) ] = 1;
			this.t += delta;
		}

	}
}