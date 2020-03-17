import styled from 'styled-components';

export const Container = styled.div`
	padding: 16px 64px 0 64px;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;

	@media ${({ theme }) => theme.media.lg} {
		padding: 16px 16px;
	}
`;

export const Posts = styled.div`
	width: 100%;
	padding: 16px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	max-height: calc(100vh - 200px);
	overflow-y: auto;
`;

export const Loading = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;
