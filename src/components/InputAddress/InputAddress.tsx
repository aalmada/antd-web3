import { useState } from "react";
import { Input } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import JazziconIcon from "../JazziconIcon/JazziconIcon";
import { InputAddressProps } from "./InputAddress.types";
import { Address } from "../../types";

const asAddress = (value: string) =>
	value.match(/^(0x)?[0-9a-fA-F]{40}$/) ? (value as Address) : undefined;

const InputAddress = ({
	onChange,
	onAddressChange,
	...props
}: InputAddressProps) => {
	const [address, setAddress] = useState<Address>();

	return (
		<Input
			spellCheck={false}
			addonBefore={
				address ? (
					<JazziconIcon address={address} />
				) : (
					<QuestionCircleOutlined />
				)
			}
			onChange={event => {
				const hex = asAddress(event.currentTarget.value.trim());
				setAddress(hex);
				if (onAddressChange) onAddressChange(hex);
				if (onChange) onChange(event);
			}}
			{...props}
		/>
	);
};

export default InputAddress;
