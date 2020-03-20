import styled from 'styled-components';

export const Button = styled.button`
	background: ${({ theme, color }) => theme[color] || theme.primary};
	color: ${({ theme }) => theme.text.primary};
	flex: 1;
	border: none;
	padding:8px 10px;
	border-radius:25px;
	min-width: ${({ width }) => width || '100%'};
	display: flex;
	flex-wrap: wrap;
	text-overflow: ellipsis;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	transition: opacity 280ms ease-out;
	opacity: .8;

	&:hover:not([disabled]) {
		opacity: 1;
		cursor: pointer;
	}

	&:disabled {
		filter: saturate(.8);
		opacity: .5;
	}

`;
