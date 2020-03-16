import styled from 'styled-components';
import { NavLink as Navigation } from 'react-router-dom';
import { hexToRgba } from 'utils/styleUtils';

import emptyAvatar from 'assets/empty-avatar.svg';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-template-rows: auto;

	@media ${({ theme }) => theme.media.lg} {
		grid-template-rows: 1fr 8fr;
		grid-template-columns: auto;
	}
`;

export const Content = styled.div`
	grid-column: 2/5;
	grid-row: auto;

	background: ${({ theme }) => theme.text.primary};

	@media ${({ theme }) => theme.media.lg} {
		grid-row: 2/9;
		grid-column: auto;
	}
`;

export const Aside = styled.aside`
	grid-column: 1/2;
	grid-row: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: ${({ theme }) => theme.gradients.aside};

	@media ${({ theme }) => theme.media.lg} {
		justify-content: space-around;
		flex-direction: row-reverse;
		padding: 4px 2px;
	}
`;

export const Nav = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	
	.active {
		background: ${({ theme }) => hexToRgba(theme.text.primary, .4)};
		color: ${({ theme }) => hexToRgba(theme.text.primary, .8)};

		&::after {
			content: '';
			position: relative;
			top: 0;
			border-top: 12px solid transparent;
			border-bottom: 12px solid transparent;
			border-right: 12px solid ${({ theme }) => theme.text.primary};
		}
	}

	@media ${({ theme }) => theme.media.lg} {
		width: 80%;
		justify-content: flex-start;

		.active {
			background: transparent;
			&::after {
				display: none;
			}
		}
	}
`;

export const NavLink = styled(Navigation)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding-left: 24px;
	text-decoration: none;
	width: 100%;
	height: 32px;
	font-size: 24px;
	transition: all 180ms ease-out;
	&, &:visited {
		color: ${({ theme }) => hexToRgba(theme.text.primary, .4)};
	}

	@media ${({ theme }) => theme.media.lg} {
		background: transparent;
		width: auto;
		margin-left: 20px;
	}
`;

export const Avatar = styled.div`
	background-image: url(${({ src }) => src ? src : emptyAvatar });
	background-size: cover;
	justify-self: center;
	border-radius: 100px;
	min-height: 140px;
	width: 140px;
	margin: 32px 0;

	@media ${({ theme }) => theme.media.lg} {
		min-height: 48px;
		width: 48px;
		margin: 0 12px;
	}
`;

