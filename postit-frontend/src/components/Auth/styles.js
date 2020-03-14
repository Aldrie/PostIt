import styled from 'styled-components';

export const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	text-align: center;
	padding: 12px 300px;

	@media ${({ theme }) => theme.media.md} {
		padding: 16px;
	}

	& > * {
		margin-bottom: 12px;
	}
`;
