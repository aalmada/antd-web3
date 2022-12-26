import { ReactNode } from "react";
import { BlockExplorer } from "../../types/BlockExplorer";

export type BlockExplorerTransactionLinkProps = {
	hash: string | undefined;
	blockExplorer: BlockExplorer | undefined;
	children?: ReactNode;
};
