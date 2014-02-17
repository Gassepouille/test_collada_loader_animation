app.scene={
	init:function(){
		return {
			scene:this.setScene(),
			renderer:this.setRenderer()
		}
	},
	setScene:function(){
		var scene = new THREE.Scene();

		return scene;
	},
	setRenderer:function(){
		var renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.physicallyBasedShading = true;
		renderer.setClearColor( 0xffffff, 0 );
		renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild(renderer.domElement);

        // Listener for window size reduction
        $( window ).resize(function() {
		  app.scene.setSizeScene(renderer);
		});

        return renderer;
	},
	setSizeScene:function(renderer){
		renderer.setSize( window.innerWidth, window.innerHeight );
	},
}