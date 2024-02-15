let simulationSettings = {
	gravity: {
		strength: 0.001,
		x: 0,
		y: 1
	},
}

let bodySettings = {
	friction: {
		normal: 0.1,
		air: 0.01,
		static: 0.5
	},
	restitution: 0,
	glowIntensity: 10
}


const gui = new dat.GUI({
	width: 1000
});

const propertiesFolder = gui.addFolder("Properties");
propertiesFolder.add(bodySettings.friction, "normal"        , 0, 1 , 0.01).name("Friction: How much does it slow down during collisions?");
propertiesFolder.add(bodySettings.friction, "air"           , 0, 1 , 0.01).name("Air Friction: How much does it slow down during flight?");
propertiesFolder.add(bodySettings.friction, "static"        , 0, 10, 0.01).name("Static Friction: How much does it slow down over time?");
propertiesFolder.add(bodySettings         , "restitution"   , 0, 1 , 0.01).name("Restitution: How many times & how high can it bounce?");
propertiesFolder.add(bodySettings         , "glowIntensity", 0, 50, 1   ).name("Glow Intensity: How bright is it?");
propertiesFolder.open();

const gravityFolder = gui.addFolder("Gravity");
gravityFolder.add(simulationSettings.gravity, "strength",  0, 0.01, 0.0001).name("Strength: How strong is gravity in this simulation?");
gravityFolder.add(simulationSettings.gravity, "x"       , -1, 1   , 0.01  ).name("X: Which direction, if any, should horizontal gravity pull?");
gravityFolder.add(simulationSettings.gravity, "y"       , -1, 1   , 0.01  ).name("Y: Which direction, if any, should vertical gravity pull?");
gravityFolder.open();

document.getElementById("controls-container").appendChild(gui.domElement);
