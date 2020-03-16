import styled, { css } from 'styled-components';

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
	padding: 12px 28%;

	@media ${({ theme }) => theme.media.sm} {
		padding: 16px;
	}

	& > * {
		margin-bottom: 12px;
	}
`;

export const DropContainer = styled.div.attrs({
	className: 'dropzone',
})`
	padding: 36px;
	width: 100%;
	border: 2px dashed ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.primary};
	border-radius: 4px;
	cursor: pointer;
	opacity: .4;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		margin-bottom: 6px;
	}

	span {
		font-size: 18px;
	}

	transition: all 200ms ease-out;

	${({ isDragActive }) => isDragActive && css`
		opacity: 1;
	`}

	${({ isDragReject }) => isDragReject && css`
		opacity: 1;
		border-color: ${({ theme }) => theme.utils.error};
		color: ${({ theme }) => theme.utils.error};
	`}
`;
