app.scene.lights={
	init:function(){
		return this.setMainLight();
	},
	setMainLight:function(){
		var pointLight = new THREE.PointLight(0xffffff,1,105);
		pointLight.position.set(50,40,25);
		return pointLight;
	}	
}