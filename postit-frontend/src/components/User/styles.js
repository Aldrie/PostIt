import styled from 'styled-components';

import emptyAvatar from 'assets/empty-avatar.svg';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 8px 32px;
`;

export const Header = styled.header`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
	text-align: center;
	h3 {
		width: 100%;
	}
`;

export const Avatar = styled.div`
	background-image: url('${({ src }) => src ? src : emptyAvatar }');
	background-size: cover;
	border-radius: 100px;
	min-height: 162px;
	width: 162px;
	cursor: pointer;
`;

export const Posts = styled.div`
	width: 100%;
	padding: 16px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	max-height: calc(100vh - 180px);
	overflow-y: auto;

	@media ${({ theme }) => theme.media.lg} {
		max-height: calc(60vh - 220px);
	}
`;

export const Loading = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: 24px;
`;
