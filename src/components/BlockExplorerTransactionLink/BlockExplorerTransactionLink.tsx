import ExternalLink from "../ExternalLink/ExternalLink";
import { BlockExplorerTransactionLinkProps } from "./BlockExplorerTransactionLink.types";

const BlockExplorerTransactionLink = ({
	hash,
	blockExplorer,
	children,
}: React.PropsWithChildren<BlockExplorerTransactionLinkProps>) =>
	blockExplorer ? (
		<ExternalLink href={`${blockExplorer.url}/tx/${hash}`}>
			{children}
		</ExternalLink>
	) : (
		<></>
	);

export default BlockExplorerTransactionLink;
