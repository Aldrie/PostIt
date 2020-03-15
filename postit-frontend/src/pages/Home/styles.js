import styled from 'styled-components';
import { NavLink as Navigation } from 'react-router-dom';
import { hexToRgba } from 'utils/styleUtils';

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
	display: grid;
	grid-template-rows: 1fr 2fr;
	grid-template-columns: 1fr 4fr 1fr;
	grid-template-areas: '. avatar .'  
											 '. nav .';
	justify-content: center;
	align-content: center;
	align-items: center;
	align-content: center;

	background: ${({ theme }) => theme.gradients.aside};

	@media ${({ theme }) => theme.media.lg} {
		grid-template-rows: auto;
		grid-template-columns: 4fr 1fr;
		grid-template-areas: 'nav avatar';
	}
`;

export const Nav = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	& > * {
		margin-bottom: 16px;
	}

	@media ${({ theme }) => theme.media.lg} {
		& > * {
			margin-bottom: 0;
		}

		justify-content: flex-start;
		
	}
	grid-area: nav;
`;

export const NavLink = styled(Navigation).attrs({
	activeStyle: {
		opacity: 1,
	}
})`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	width: 100%;
	height: 32px;
	font-size: 24px;
	background: ${({ theme }) => hexToRgba(theme.text.primary, .6)};

	opacity: .6;

	&, &:visited {
		color: ${({ theme }) => theme.primary};
	}

	@media ${({ theme }) => theme.media.lg} {
		background: transparent;
		width: auto;
		margin-left: 20px;
	}
`;

export const AvatarContainer = styled.div`
	background: red;
	justify-self: center;
	grid-area: avatar;
	border-radius: 100px;
	min-height: 140px;
	width: 140px;

	@media ${({ theme }) => theme.media.lg} {
		min-height: 48px;
		width: 48px;
	}
`;

export const Avatar = styled.div`

`;
