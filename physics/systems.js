import { Box } from "./renderers";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";

let boxIds = 0;

const distance = ([x1, y1], [x2, y2]) =>
	Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

const Physics = (state, { touches, time }) => {
	let engine = state["physics"].engine;

	Matter.Engine.update(engine, time.delta);

	return state;
};

const CreateBox = (state, { touches, screen }) => {
	return state;
};

const MoveBox = (state, { touches }) => {
	let constraint = state["physics"].constraint;

	//-- Handle start touch
	let start = touches.find(x => x.type === "start");

	if (start) {
		let startPos = [start.event.pageX, start.event.pageY - 40];
		let boxId = Object.keys(state).find(key => {
			let body = state[key].body;
			return (
				body && Matter.Bounds.contains(body.bounds, {x: startPos[0], y: startPos[1]})
			);
		});

		if (boxId) {
			constraint.pointA = { x: startPos[0], y: startPos[1] };
			constraint.bodyB = state[boxId].body;
			constraint.pointB = { x: 0, y: 0 };
			constraint.angleB = state[boxId].body.angle;
		}
	}

	//-- Handle move touch
	let move = touches.find(x => x.type === "move");

	if (move) {
		constraint.pointA = { x: move.event.pageX, y: move.event.pageY - 40 };
	}

	//-- Handle end touch
	let end = touches.find(x => x.type === "end");

	if (end) {
		constraint.pointA = null;
		constraint.bodyB = null;
		constraint.pointB = null;
	}

	return state;
};

const CleanBoxes = (state, { touches, screen }) => {
	let world = state["physics"].world;

	Object.keys(state)
		.filter(key => state[key].body && state[key].body.position.y > screen.height * 2)
		.forEach(key => {
			Matter.Composite.remove(world, state[key].body);
			delete state[key];
		});

	return state;
};

export { Physics, CreateBox, MoveBox, CleanBoxes };