import { InputProps, InputRef } from "antd";
import { Address } from "../../types";

export type InputAddressProps = Omit<
	InputProps & React.RefAttributes<InputRef>,
	"addonBefore"
> & {
	onAddressChange?: (address: Address | undefined) => void;
};
