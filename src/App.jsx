import {Canvas, useFrame} from '@react-three/fiber';
import './App.css'
import {RotatingBox} from './RotatingBox.jsx';
import {Floor} from './Floor.jsx';
import {PlayerCamera} from './PlayerCamera.jsx';

function App() {
	
  return (
		<div id="canvas-container">
			<Canvas>
				<PlayerCamera />
				<ambientLight intensity={0.1}/>
				<directionalLight color="red" position={[-5,0,5]} />
				<directionalLight color="blue" position={[5,0,5]} />
				<RotatingBox />
				<Floor/>
			</Canvas>
		</div>
  )
}

export default App
