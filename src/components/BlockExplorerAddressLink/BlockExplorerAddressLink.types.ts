import { ReactNode } from "react";
import { BlockExplorer } from "../../types/BlockExplorer";

export type BlockExplorerAddressLinkProps = {
	address: string | undefined;
	blockExplorer: BlockExplorer | undefined;
	children?: ReactNode;
};
