import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	border: solid 2px ${({ theme }) => theme.primary};
	padding: 4px 12px;
`;

export const Input = styled.input`
	background: transparent;
	border: none;
	flex: 1;
	font-size: 26px;
	margin-right: 8px;
`;

export const IconButton = styled.button`
	border: none;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
`;
