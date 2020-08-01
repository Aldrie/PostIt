import styled from 'styled-components';

import emptyAvatar from 'assets/empty-avatar.svg';
import { hexToRgba } from 'utils/styleUtils';

export const Container = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: ${({ even }) => even ? 'row-reverse' : 'row'};
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	padding: 4px 16px;
	border-radius: 20px;
	margin-bottom: 16px;
	box-shadow: 0 0 12px ${({ theme }) => theme.name === 'light' ? hexToRgba(theme.text.contrast, .3) : 'rgba(0, 0, 0, .2)'};

	@media ${({ theme }) => theme.media.lg} {
		width: 100%;
	}
`;

export const Author = styled.div`
	width: 100px;
	display: flex;
	flex-direction: column-reverse;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 8px 0;

	span {
		color: ${({ theme }) => theme.primary};
		font-size: 18px;
		white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    overflow: hidden
	}
`;

export const Avatar = styled.div`
	background-image: url('${({ src }) => src ? src : emptyAvatar }');
	background-size: cover;
	border-radius: 100px;
	min-height: 48px;
	width: 48px;
	margin-bottom: 8px;
	cursor: pointer;
`;

export const Content = styled.div`
	width: 100%;
	padding: 32px;
	min-height: 120px;
	max-height: 120px;
	font-size: 18px;
	overflow: hidden;
	cursor: pointer;
`;
