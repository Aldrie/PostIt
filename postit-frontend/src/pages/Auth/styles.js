import styled from 'styled-components';

import { hexToRgba } from 'utils/styleUtils';

export const Container = styled.div`
	min-height: 100vh;
	max-height: 100vh;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	background: linear-gradient(180deg, rgba(34,94,141,1) 0%, rgba(112,106,169,1) 66%, rgba(184,112,175,1) 100%);

	padding: 12vh 20vw;

	@media ${({ theme }) => theme.media.md} {
		padding: 24vh 10vw;
	}
`;

export const Box = styled.div`
	background: ${({ theme }) => hexToRgba(theme.text.primary, .8)};
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
`;
