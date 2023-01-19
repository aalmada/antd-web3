import {
	CustomIconComponentProps,
	IconBaseProps,
} from "@ant-design/icons/lib/components/Icon";
import { Address } from "../../types";

export interface IconComponentProps extends IconBaseProps {
	component?: React.ComponentType<
		CustomIconComponentProps | React.SVGProps<SVGSVGElement>
	>;
}

export type JazziconIconProps = IconComponentProps & {
	address: Address | undefined;
};
