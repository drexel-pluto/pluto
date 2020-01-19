import { Box } from "./renderers";
import {Animated} from "react-native";
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

const MoveBox = (state, { touches }) => {
	let constraint = state.physics.constraint;
	//-- Handle start touch
	let start = touches.find(x => x.type === "start");

	if (start) {
		let startPos = [start.event.pageX, start.event.pageY];
		let boxId = Object.keys(state.entities).find(key => {
			let body = state.entities[key].body;
			return (
				body && Matter.Bounds.contains(body.bounds, {x: startPos[0], y: startPos[1]})
			);
		}); 

		if (boxId) {
			let radius = state.entities[boxId].radius;
			constraint.pointA = { x: startPos[0], y: startPos[1] };
			constraint.bodyB = state.entities[boxId].body;
			constraint.pointB = { x: 0, y: 0 };
			constraint.angleB = state.entities[boxId].body.angle;
			start.backgroundTarget = false;
		} else {
			start.backgroundTarget = true;
		}
	}

	//-- Handle move touch
	let move = touches.find(x => x.type === "move");

	if (move) {
		constraint.pointA = { x: move.event.pageX, y: move.event.pageY };
	}

	//-- Handle end touch
	let end = touches.find(x => x.type === "end");

	if (end) {
		constraint.pointA = null;
		constraint.bodyB = null;
		constraint.pointB = null;
	}
};

const SwipeScreen = (state, { touches }) => {
	let constraint = state["physics"].constraint;

	//-- Handle move touch
	let move = touches.find(x => x.type === "move");

	if (move) {
		
	}

	//-- Handle end touch
	let end = touches.find(x => x.type === "end");


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

export { Physics, MoveBox, CleanBoxes, SwipeScreen };