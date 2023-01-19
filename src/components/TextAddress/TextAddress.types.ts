import { Address, BlockExplorer } from "../../types";

export type TextAddressProps = {
	address: Address | undefined;
	length?: number;
	avatar?: boolean;
	ensName?: string;
	ensAvatar?: string;
	blockExplorer?: BlockExplorer;
	isLoading?: boolean;
};
