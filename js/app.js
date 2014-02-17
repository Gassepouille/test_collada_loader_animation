app={
	init:function(){
		this.loadModels();
	},
	loadModels:function(){
		// Game launched when model loaded (callback in the player file)
		this.scene.player.init();
	},
	// Init all the game
	launchGame:function(){
		// init scene & objects
		var scene =	this.scene.init();
		app.settings.scene		=	scene.scene;
		app.settings.renderer	=	scene.renderer;
		app.settings.camera		=	this.scene.camera.init(app.settings.scene);
		app.settings.axes		=	this.scene.axes.init();
		app.settings.pointLight	=	this.scene.lights.init();

		// add objects in scene
		app.settings.scene.add(app.settings.axes);
		app.settings.scene.add(app.settings.pointLight);
		app.settings.scene.add(app.settings.player);

		// Set listeners 
		this.setListener();

		// Launch Engine
		this.scene.engine.init();	
	},
	onKeyDown:function(event){
		switch ( event.keyCode ) {
			case 32: // space
				app.settings.gogo=true;	
				break;
		}
	},
	onKeyUp:function(event){
		switch ( event.keyCode ) {
			case 32: // space
				app.settings.gogo=false;
				break;
		}
	},
	setListener:function(){
		document.addEventListener( 'keydown', app.onKeyDown, false );
		document.addEventListener( 'keyup', app.onKeyUp, false );
	},
}