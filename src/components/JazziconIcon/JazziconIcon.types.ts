import {
	CustomIconComponentProps,
	IconBaseProps,
} from "@ant-design/icons/lib/components/Icon";

export interface IconComponentProps extends IconBaseProps {
	component?: React.ComponentType<
		CustomIconComponentProps | React.SVGProps<SVGSVGElement>
	>;
}

export type JazziconIconProps = IconComponentProps & {
	address: `0x${string}` | undefined;
};
