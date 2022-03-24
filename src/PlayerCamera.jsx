import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { keyboard } from "./keyboard";
import { PointerLockControls } from "@react-three/drei";
export function PlayerCamera() {
	const groupRef = useRef();
	const controlRef = useRef();
	useFrame(({camera}) => {
		if(keyboard.w) {
			controlRef.current.moveForward(.1);
		}
		if(keyboard.s) {
			controlRef.current.moveForward(-.1);
		}
		if(keyboard.d) {
			controlRef.current.moveRight(.1);
		}
		if(keyboard.a) {
			controlRef.current.moveRight(-.1);
		}
	})
	return (
		<group ref={groupRef}>
			<PointerLockControls ref={controlRef}/>
		</group>
	)
}