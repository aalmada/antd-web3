import { InputProps, InputRef } from "antd";

export type InputAddressProps = Omit<
	InputProps & React.RefAttributes<InputRef>,
	"addonBefore"
> & {
	onAddressChange: (address: `0x${string}` | undefined) => void;
};
