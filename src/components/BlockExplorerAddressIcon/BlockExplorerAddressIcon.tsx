import { Tooltip } from "antd";
import BlockExplorerAddressLink from "../BlockExplorerAddressLink/BlockExplorerAddressLink";
import { InfoCircleOutlined } from "@ant-design/icons";
import { BlockExplorerAddressIconProps } from "./BlockExplorerAddressIcon.types";

const BlockExplorerAddressIcon = ({
	address,
	blockExplorer,
}: BlockExplorerAddressIconProps) =>
	blockExplorer ? (
		<BlockExplorerAddressLink
			address={address}
			blockExplorer={blockExplorer}
		>
			<Tooltip title={`View on ${blockExplorer.name}`}>
				<InfoCircleOutlined />
			</Tooltip>
		</BlockExplorerAddressLink>
	) : (
		<></>
	);

export default BlockExplorerAddressIcon;
