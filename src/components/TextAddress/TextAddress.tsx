import { Image, Space, Tooltip, Typography } from "antd";
import BlockExplorerIcon from "../BlockExplorerAddressIcon/BlockExplorerAddressIcon";
import JazziconIcon from "../JazziconIcon/JazziconIcon";
import CopyIcon from "../CopyIcon/CopyIcon";
import { truncate } from "../Utils";
import { TextAddressProps } from "./TextAddress.types";

const { Text } = Typography;

const TextAddress = ({
	address,
	length,
	avatar,
	ensName,
	ensAvatar,
	blockExplorer,
}: TextAddressProps) => {
	return (
		<Space>
			<Tooltip title={address}>
				<Space>
					{(avatar ?? true) &&
						(ensAvatar ? (
							<Image src={ensAvatar} width="1em" height="1em" />
						) : (
							<JazziconIcon address={address} />
						))}
					<Text>{ensName ?? truncate(address, length ?? 10)}</Text>
				</Space>
			</Tooltip>
			<CopyIcon text={address} />
			<BlockExplorerIcon
				address={address}
				blockExplorer={blockExplorer}
			/>
		</Space>
	);
};

export default TextAddress;
