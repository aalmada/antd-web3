import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import externals from "rollup-plugin-node-externals";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

export default [
	{
		input: "./src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
				name: "antd-web3",
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			externals({
				deps: false,
				peerDeps: true,
			}),
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			postcss(),
			terser(),
		],
	},
	{
		input: "./dist/esm/types/src/index.d.ts",
		output: [{ file: "./dist/index.d.ts", format: "esm" }],
		external: [/\.css$/],
		plugins: [dts()],
	},
];
