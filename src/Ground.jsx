import { usePlane } from "@react-three/cannon";
import { Color } from "three";

export function Ground(props) {
	const [ref] = usePlane(() => ({ ...props }));
	return (
		<mesh ref={ref} receiveShadow>
			<planeBufferGeometry args={[20, 20]} />
			<shadowMaterial color="#171717" />
			<meshBasicMaterial color={new Color("lightblue")} />
		</mesh>
	);
}
