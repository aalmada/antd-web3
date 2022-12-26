import { Typography } from "antd";
import { ExternalLinkProps } from "./ExternalLink.types";

const { Link } = Typography;

const ExternalLink = ({ children, ...props }: ExternalLinkProps) => (
	<Link target="_blank" rel="noopener noreferrer" {...props}>
		{children}
	</Link>
);

export default ExternalLink;
