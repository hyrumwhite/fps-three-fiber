import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function RotatingBox() {
	let meshRef = useRef();
	useFrame(() => {
		meshRef.current.rotation.y += 0.02;
		meshRef.current.rotation.x += 0.01;
	});
	return (
		<mesh ref={meshRef} position={[0, 0, 0]} receiveShadow>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial />
		</mesh>
	);
}
