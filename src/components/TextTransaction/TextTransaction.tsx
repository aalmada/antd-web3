import { Space, Spin, Tooltip, Typography } from "antd";
import BlockExplorerTransactionIcon from "../BlockExplorerTransactionIcon/BlockExplorerTransactionIcon";
import CopyIcon from "../CopyIcon/CopyIcon";
import { truncate } from "../Utils";
import { TextTransactionProps } from "./TextTransaction.types";

const { Text } = Typography;

const TextTransaction = ({
	hash,
	length,
	blockExplorer,
	isLoading,
}: TextTransactionProps) => {
	return (
		<Spin spinning={isLoading ?? false}>
			<Space>
				<Tooltip title={hash}>
					<Text style={{ whiteSpace: "nowrap", height: "auto" }}>
						{truncate(hash, length ?? 20)}
					</Text>
				</Tooltip>
				<CopyIcon text={hash} />
				<BlockExplorerTransactionIcon
					hash={hash}
					blockExplorer={blockExplorer}
				/>
			</Space>
		</Spin>
	);
};

export default TextTransaction;
