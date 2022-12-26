import { useState } from "react";
import { Input } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import JazziconIcon from "../JazziconIcon/JazziconIcon";
import { InputAddressProps } from "./InputAddress.types";

const InputAddress = ({
	value,
	onChange,
	onAddressChange,
	...props
}: InputAddressProps) => {
	const [address, setAddress] = useState<`0x${string}`>();

	return (
		<Input
			addonBefore={
				address ? (
					<JazziconIcon address={address} />
				) : (
					<QuestionCircleOutlined />
				)
			}
			value={address || ""}
			onChange={event => {
				const value = event.currentTarget.value.trim();
				setAddress(value as `0x${string}`);
				if (onAddressChange) onAddressChange(address);
				if (onChange) onChange(event);
			}}
			{...props}
		/>
	);
};

export default InputAddress;
