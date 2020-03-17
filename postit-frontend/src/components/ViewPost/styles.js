import styled from 'styled-components';

import emptyAvatar from 'assets/empty-avatar.svg';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 8px 16px;
`;

export const Header = styled.header`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	svg {
		cursor: pointer;
	}

	h3 {
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 300px;
		display: block;
		overflow: hidden;
		text-align: right;
	}

	@media ${({ theme }) => theme.media.lg} {
		h3 {
			font-size: 24px;
			width: 120px;
		}
	}
`;

export const Author = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const Avatar = styled.div`
	background-image: url(${({ src }) => src ? src : emptyAvatar });
	background-size: cover;
	border-radius: 100px;
	min-height: 90px;
	width: 90px;
	margin-left: 16px;

	@media ${({ theme }) => theme.media.lg} {
		min-height: 60px;
		width: 60px;
	}
`;

export const Content = styled.div`
	width: 100%;
	padding: 32px;
	font-size: 22px;
	height: calc(100vh - 120px);
	overflow: auto;
`;
