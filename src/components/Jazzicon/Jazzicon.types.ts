export type JazziconProps = Omit<React.SVGProps<SVGSVGElement>, "viewBox"> & {
	seed?: number | undefined;
};
