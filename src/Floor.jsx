export function Floor() {
	return(
		<mesh position={[0,-1,0]} rotation={[90,0,0]}>
			<planeGeometry args={[10, 10]}/>
			<meshBasicMaterial/>
		</mesh>
	)
}