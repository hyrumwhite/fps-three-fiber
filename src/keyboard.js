export const keyboard = {
	ArrowLeft: null,
	ArrowRight: null,
	ArrowUp: null,
	ArrowDown: null,
	w: null,
	a: null,
	s: null,
	d: null,
};

const keyUp = ({ key }) => (keyboard[key] = false);
const keyDown = ({ key }) => (keyboard[key] = true);

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
