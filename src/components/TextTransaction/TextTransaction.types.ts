import { BlockExplorer } from "../../types/BlockExplorer";

export type TextTransactionProps = {
	hash: `0x${string}`;
	length?: number;
	blockExplorer?: BlockExplorer;
};
