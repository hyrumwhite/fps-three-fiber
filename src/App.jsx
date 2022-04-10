import { Canvas, useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import "./App.css";
import { RotatingBox } from "./RotatingBox.jsx";
import { Ground } from "./Ground.jsx";
import { PlayerCamera } from "./PlayerCamera.jsx";
import Demo from "./cube-demo.jsx";

function App() {
	return (
		<div id="canvas-container">
			{/* <Demo/> */}
			<Canvas
				shadows
				gl={{ alpha: false }}
				camera={{ fov: 50, position: [-1, 1, 2.5] }}
			>
				{/* <hemisphereLight intensity={0.35} />
				<spotLight
					position={[5, 5, 5]}
					angle={0.3}
					penumbra={1}
					intensity={2}
					castShadow
					shadow-mapSize-width={256}
					shadow-mapSize-height={256}
				/> */}
				<PlayerCamera />
				<ambientLight intensity={0.1} />
				<directionalLight color="red" position={[-5, 0, 5]} />
				<directionalLight color="blue" position={[5, 0, 5]} />
				<RotatingBox />
				<Physics broadphase="SAP">
					<Ground rotation={[-Math.PI / 2, 0, 0]} />
				</Physics>
			</Canvas>
		</div>
	);
}

export default App;
