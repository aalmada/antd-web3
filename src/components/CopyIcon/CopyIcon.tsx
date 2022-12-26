import { Tooltip, Typography } from "antd";
import { useState } from "react";
import copy from "clipboard-copy";
import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { CopyIconProps } from "./CopyIcon.types";

const { Link } = Typography;

const CopyIcon = ({ text }: CopyIconProps) => {
	const [isCopying, setIsCopying] = useState(false);

	const sleep = (ms: number) =>
		new Promise(resolve => setTimeout(resolve, ms));

	const handleCopy = async () => {
		setIsCopying(true);
		copy(text ?? "");
		await sleep(3000);
		setIsCopying(false);
	};

	if (!text || text.length === 0) return <></>;

	return (
		<Link onClick={handleCopy}>
			{isCopying ? (
				<Tooltip title="Copied">
					<CheckOutlined style={{ color: "LimeGreen" }} />
				</Tooltip>
			) : (
				<Tooltip title="Copy">
					<CopyOutlined />
				</Tooltip>
			)}
		</Link>
	);
};

export default CopyIcon;
