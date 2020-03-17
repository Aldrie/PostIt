import styled from 'styled-components';

export const Container = styled.div`
	padding: 16px 32px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
`;

export const Form = styled.form`
	width: 100%;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: calc(70vh - 100px);
	padding: 12px;
	font-size: 22px;
	resize: none;
	background: ${({ theme }) => theme.text.primary};
	border: solid 1px ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.text.contrast};
	border-radius: 12px;
`;

export const Buttons = styled.div`
	width: 12%;
	padding: 18px 0;
	display: flex;
	flex-wrap: nowrap;

	button:first-of-type{
		margin-right: 8px;
	}
`;
