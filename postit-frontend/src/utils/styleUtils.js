export const hexToRgba = (hex, opacity) => {
	hex = hex.replace(/#/g, '').trim();
	hex = hex.match(/.{2}/g);

	const rgb = hex.map(code => parseInt(code, 16).toString());

	return `rgba(${rgb.join(',')}, ${opacity ?? '1'})`;
};
