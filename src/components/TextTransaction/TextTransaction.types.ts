import { BlockExplorer, Hash } from "../../types";

export type TextTransactionProps = {
	hash: Hash;
	length?: number;
	blockExplorer?: BlockExplorer;
	isLoading?: boolean;
};
