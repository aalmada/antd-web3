import { BlockExplorer } from "../../types/BlockExplorer";

export type TextAddressProps = {
	address: `0x${string}` | undefined;
	length?: number;
	avatar?: boolean;
	ensName?: string;
	ensAvatar?: string;
	blockExplorer?: BlockExplorer;
};
