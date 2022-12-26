import { LinkProps } from "antd/lib/typography/Link";

export type ExternalLinkProps = Omit<
	LinkProps & React.RefAttributes<HTMLElement>,
	"target" | "rel"
>;
