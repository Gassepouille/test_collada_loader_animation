app.scene.player={
	init:function(){
		this.setPlayer();
	},
	setPlayer:function(){
		var monster={};
		var test;
		var loader = new THREE.ColladaLoader();
		loader.options.convertUpAxis = true;
		loader.load( './assets/models/monster/monster.dae', function ( collada ) {
			monster.dae = collada.scene;
			monster.skin = collada.skins[ 0 ];

			monster.dae.scale.x = monster.dae.scale.y = monster.dae.scale.z = 0.03;
			monster.dae.updateMatrix();

			// Init Collada
			app.settings.player=monster.dae;
			app.settings.player.skin=monster.skin;

			// Launch app when collada file loaded
			app.launchGame();

		} );
		

	}
}