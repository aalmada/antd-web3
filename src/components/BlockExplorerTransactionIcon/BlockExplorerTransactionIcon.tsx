import { Tooltip } from "antd";
import BlockExplorerTransactionLink from "../BlockExplorerTransactionLink/BlockExplorerTransactionLink";
import { InfoCircleOutlined } from "@ant-design/icons";
import { BlockExplorerTransactionIconProps } from "./BlockExplorerTransactionIcon.types";

const BlockExplorerTransactionIcon = ({
	hash,
	blockExplorer,
}: BlockExplorerTransactionIconProps) =>
	blockExplorer ? (
		<BlockExplorerTransactionLink hash={hash} blockExplorer={blockExplorer}>
			<Tooltip title={`View on ${blockExplorer.name}`}>
				<InfoCircleOutlined />
			</Tooltip>
		</BlockExplorerTransactionLink>
	) : (
		<></>
	);

export default BlockExplorerTransactionIcon;
