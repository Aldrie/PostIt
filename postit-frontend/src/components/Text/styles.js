import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextH1 = styled.h1`
	color: ${({ theme, color }) => color ? theme[color] || color : theme.primary};
	font-size: 50px;
`;

export const TextH2 = styled.h1`
	color: ${({ theme, color }) => color ? theme[color] || color : theme.primary};
	font-size: 40px;
`;

export const TextH3 = styled.h1`
	color: ${({ theme, color }) => color ? theme[color] || color : theme.primary};
	font-size: 32px;
`;

export const TextH4 = styled.h1`
	color: ${({ theme, color }) => color ? theme[color] || color : theme.primary};
	font-size: 24px;
`;

export const TextH5 = styled.h1`
	color: ${({ theme, color }) => color ? theme[color] || color : theme.primary};
	font-size: 16px;
`;

export const TextHref = styled(Link)`
	color: ${({ theme, color }) => color ? theme[color] || color : theme.primary};
	font-size: ${({ size }) => size ? `${size}px` : '18px'};
`;
