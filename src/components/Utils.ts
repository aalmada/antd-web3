import { Address } from "../types";

export const truncate = (address: Address | undefined, length: number) => {
	if (!address || address.length <= length) return address;

	return (
		address.slice(0, length - 4) + "..." + address.slice(address.length - 4)
	);
};

export const addressToSeed = (address: Address | undefined) =>
	address ? parseInt(address.slice(0, 10)) : 0;
