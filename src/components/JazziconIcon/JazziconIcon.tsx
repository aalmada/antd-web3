import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { svgBaseProps, useInsertStyles } from "@ant-design/icons/lib/utils";
import Jazzicon from "../Jazzicon/Jazzicon";
import classNames from "classnames";
import { addressToSeed } from "../Utils";
import { forwardRef } from "react";
import { JazziconIconProps } from "./JazziconIcon.types";

const JazziconIcon = forwardRef<HTMLSpanElement, JazziconIconProps>(
	(props, ref) => {
		const {
			address,

			// affect outter <i>...</i>
			className,

			// affect inner <svg>...</svg>
			component: Component,
			spin,
			rotate,

			tabIndex,
			onClick,

			...restProps
		} = props;

		useInsertStyles();

		const classString = classNames("anticon", className);

		const svgClassString = classNames({
			"anticon-spin": !!spin,
		});

		const svgStyle = rotate
			? {
					msTransform: `rotate(${rotate}deg)`,
					transform: `rotate(${rotate}deg)`,
			  }
			: undefined;

		const innerSvgProps: CustomIconComponentProps = {
			...svgBaseProps,
			className: svgClassString,
			style: svgStyle,
		};

		let iconTabIndex = tabIndex;
		if (iconTabIndex === undefined && onClick) {
			iconTabIndex = -1;
		}

		return (
			<span
				role="img"
				{...restProps}
				ref={ref}
				tabIndex={iconTabIndex}
				onClick={onClick}
				className={classString}
			>
				<Jazzicon seed={addressToSeed(address)} {...innerSvgProps} />
			</span>
		);
	}
);
JazziconIcon.displayName = "Jazzicon";

export default JazziconIcon;
