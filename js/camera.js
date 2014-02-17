app.scene.camera={
	init:function(target){
		return this.setMainCam(target);
	},
	setMainCam:function(target){
		var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.set( 70,70,70);
		camera.lookAt(target.position);
		return camera;
	}
}