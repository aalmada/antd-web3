// based on: https://github.com/MetaMask/jazzicon

import { useState, useEffect } from "react";
import MersenneTwister from "mersenne-twister";
import { JazziconProps } from "./Jazzicon.types";

type RGB = {
	r: number;
	g: number;
	b: number;
};

type HSL = {
	h: number;
	s: number;
	l: number;
};

type Shape = {
	tx: number;
	ty: number;
	rot: number;
	fill: HSL;
};

const shapeCount = 4;

const colorPallete: HSL[] = [
	{ h: 182, s: 98.6, l: 27.6 }, // teal
	{ h: 28, s: 100.0, l: 49.4 }, // bright orange
	{ h: 189, s: 93.7, l: 18.8 }, // dark teal
	{ h: 15, s: 99.2, l: 48.6 }, // orangered
	{ h: 341, s: 97.4, l: 54.3 }, // magenta
	{ h: 341, s: 81.7, l: 42.9 }, // raspberry
	{ h: 48, s: 100.0, l: 47.6 }, // goldenrod
	{ h: 204, s: 89.5, l: 51.6 }, // lightning blue
	{ h: 219, s: 75.9, l: 51.2 }, // sail blue
	{ h: 39, s: 98.4, l: 47.6 }, // gold
];

const genShape = (
	remainingColors: HSL[],
	index: number,
	total: number,
	generator: MersenneTwister
): Shape => {
	const firstRot = generator.random();
	const angle = Math.PI * 2 * firstRot;
	const velocity = (1 / total) * (generator.random() + index);

	const tx = Math.cos(angle) * velocity;
	const ty = Math.sin(angle) * velocity;

	// Third random is a shape rotation on top of all of that.
	const secondRot = generator.random();
	const rot = firstRot * 360 + secondRot * 180;

	const fill = genColor(remainingColors, generator);
	return { tx, ty, rot, fill };
};

const genColor = (colors: HSL[], generator: MersenneTwister): HSL => {
	const _rand = generator.random(); // eslint-disable-line
	const idx = Math.floor(colors.length * generator.random());
	return colors.splice(idx, 1)[0];
};

const wobble = 30; // degrees
const hueShift = (colors: HSL[], generator: MersenneTwister): HSL[] => {
	const amount = generator.random() * wobble - wobble / 2;
	return colors.map(color => colorRotate(color, amount));
};

const colorRotate = ({ h, s, l }: HSL, degrees: number): HSL => {
	h = (h + degrees) % 360;
	h = h < 0 ? 360 + h : h;
	return { h, s, l };
};

const HSLToRGB = ({ h, s, l }: HSL): RGB => {
	s /= 100;
	l /= 100;

	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = l - c / 2;
	let r = 0;
	let g = 0;
	let b = 0;

	if (h < 60) {
		r = c;
		g = x;
	} else if (h < 120) {
		r = x;
		g = c;
	} else if (h < 180) {
		g = c;
		b = x;
	} else if (h < 240) {
		g = x;
		b = c;
	} else if (h < 300) {
		r = x;
		b = c;
	} else {
		r = c;
		b = x;
	}

	return {
		r: Math.round((r + m) * 255),
		g: Math.round((g + m) * 255),
		b: Math.round((b + m) * 255),
	};
};

const RGBtoHex = ({ r, g, b }: RGB) => {
	const toHex = (value: number) => value.toString(16).padStart(2, "0");

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const Jazzicon = ({ seed, ...props }: JazziconProps) => {
	const [background, setBackground] = useState<HSL>({ h: 0, s: 0, l: 0 });
	const [shapes, setShapes] = useState<Shape[]>([]);

	useEffect(() => {
		const generator = new MersenneTwister(seed);
		const remainingColors = hueShift(colorPallete, generator);

		setBackground(genColor(remainingColors, generator));

		const newShapes: Shape[] = [];
		for (let index = 0; index < shapeCount - 1; index++) {
			newShapes.push(
				genShape(remainingColors, index, shapeCount - 1, generator)
			);
		}
		setShapes(newShapes);
	}, [seed]);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" {...props}>
			<mask id="mask" maskUnits="userSpaceOnUse">
				<circle cx=".5" cy=".5" r=".5" fill="white" />
			</mask>
			<g mask="url(#mask)">
				<rect
					key={0}
					width="1"
					height="1"
					fill={RGBtoHex(HSLToRGB(background))}
				/>
				{shapes.map(({ tx, ty, rot, fill }, index) => (
					<rect
						key={index + 1}
						width="1"
						height="1"
						transform-origin=".5 .5"
						transform={`translate(${tx} ${ty}) rotate(${rot.toFixed(
							1
						)})`}
						fill={RGBtoHex(HSLToRGB(fill))}
					/>
				))}
			</g>
		</svg>
	);
};

export default Jazzicon;
