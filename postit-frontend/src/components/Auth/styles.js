import styled, { css } from 'styled-components';
import { hexToRgba } from 'utils/styleUtils';

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
	padding: 0 28%;

	@media ${({ theme }) => theme.media.sm} {
		padding:  0 8px;
	}

	& > * {
		margin-bottom: 12px;
	}
`;

export const DropContainer = styled.div.attrs({
	className: 'dropzone',
})`
	padding: 12px;
	height: 180px;
	width: 180px;
	border: 2px dashed ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.primary};
	border-radius: 200px;
	cursor: pointer;
	opacity: .4;
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		margin-bottom: 6px;
	}

	span {
		font-size: 16px;
	}

	transition: all 200ms ease-out;

	${({ isDragActive }) => (isDragActive) && css`
		opacity: 1;
	`}

	${({ isDragReject }) => isDragReject && css`
		opacity: 1;
		border-color: ${({ theme }) => theme.utils.error};
		color: ${({ theme }) => theme.utils.error};
		text-shadow: 0 0 12px ${({ theme }) => hexToRgba(theme.utils.error, .6)};
		box-shadow: 0 0 12px ${({ theme }) => hexToRgba(theme.utils.error, .6)};
	`}

	${({ preview }) => preview && css`
		background-image: url(${preview});
		opacity: .8;
	`};

	@media ${({ theme }) => theme.media.sm} {
		height: 100px;
		width: 100px;
	}
`;
