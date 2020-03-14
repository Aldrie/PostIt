import React from 'react';
import {
	TextH1,
	TextH2,
	TextH3,
	TextH4,
	TextH5,
} from './styles';

export const H1 = ({ color, children }) => {
	return(
		<TextH1 color={color}>
			{children}
		</TextH1>
	);
};

export const H2 = ({ color, children }) => {
	return(
		<TextH2 color={color}>
			{children}
		</TextH2>
	);
};

export const H3 = ({ color, children }) => {
	return(
		<TextH3 color={color}>
			{children}
		</TextH3>
	);
};

export const H4 = ({ color, children }) => {
	return(
		<TextH4 color={color}>
			{children}
		</TextH4>
	);
};

export const H5 = ({ color, children }) => {
	return(
		<TextH5 color={color}>
			{children}
		</TextH5>
	);
};
