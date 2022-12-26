import { Space, Tooltip, Typography } from "antd";
import BlockExplorerTransactionIcon from "../BlockExplorerTransactionIcon/BlockExplorerTransactionIcon";
import CopyIcon from "../CopyIcon/CopyIcon";
import { truncate } from "../Utils";
import { TextTransactionProps } from "./TextTransaction.types";

const { Text } = Typography;

const TextTransaction = ({
	hash,
	length,
	blockExplorer,
}: TextTransactionProps) => {
	return (
		<Space>
			<Tooltip title={hash}>
				<Text>{truncate(hash, length ?? 20)}</Text>
			</Tooltip>
			<CopyIcon text={hash} />
			<BlockExplorerTransactionIcon
				hash={hash}
				blockExplorer={blockExplorer}
			/>
		</Space>
	);
};

export default TextTransaction;
