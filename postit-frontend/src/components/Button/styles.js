import styled from 'styled-components';

export const Button = styled.button`
	background: ${({ theme, color }) => theme[color] || theme.primary};
	color: ${({ theme }) => theme.text.primary};
	flex: 1;
	border: none;
	padding: 12px 16px;
	border-radius:25px;
	min-width: ${({ width }) => width || '100%'};
	display: flex;
	flex-wrap: wrap;
	text-overflow: ellipsis;
	justify-content: center;
	align-items: center;
`;
