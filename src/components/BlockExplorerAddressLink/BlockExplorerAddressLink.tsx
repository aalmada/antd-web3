import ExternalLink from "../ExternalLink/ExternalLink";
import { BlockExplorerAddressLinkProps } from "./BlockExplorerAddressLink.types";

const BlockExplorerAddressLink = ({
	address,
	blockExplorer,
	children,
}: BlockExplorerAddressLinkProps) => {
	return blockExplorer ? (
		<ExternalLink href={`${blockExplorer.url}/address/${address}`}>
			{children}
		</ExternalLink>
	) : (
		<></>
	);
};

export default BlockExplorerAddressLink;
