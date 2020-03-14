import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	border: solid 2px ${({ theme }) => theme.primary};
	padding: 6px 16px;
	width: 100%;
	border-radius: 20px;
	opacity: .6;

	&:focus-within {
		opacity: 1;
	}

`;

export const Input = styled.input`
	background: transparent;
	border: none;
	width: 85%;
	font-size: 22px;
	color: ${({ theme }) => theme.primary};

	&::placeholder {
		color: ${({ theme }) => theme.primary};
	}
`;

export const IconButton = styled.span`
	border: none;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15%;
`;

export const StartIcon = styled.span`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 6%;

	@media ${({ theme }) => theme.media.sm} {
		width: 8%;
	}
`;
