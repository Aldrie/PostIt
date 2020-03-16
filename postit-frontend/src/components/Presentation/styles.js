import styled from 'styled-components';

export const Container = styled.div`
	flex: .2;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 30%;

	@media ${({ theme }) => theme.media.sm} {
		width: 90%;
	}
`;
