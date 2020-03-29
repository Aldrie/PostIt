import { createGlobalStyle } from 'styled-components';
import { hexToRgba } from 'utils/styleUtils';

export const GlobalStyle = createGlobalStyle`
	* {
		outline: none;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		font-family: Josefin Sans, sans-serif;
		-webkit-tap-highlight-color: transparent;
		color: ${({ theme }) => theme.text.contrast};
		transition: color 200ms ease-out, background 180ms ease-in;

		&::-webkit-scrollbar {
			width: .6em;
		}
		
		&::-webkit-scrollbar-track {
			background: ${({ theme }) => hexToRgba(theme.text.contrast, .2)};
			border-radius: 10px;
		}
		
		&::-webkit-scrollbar-thumb {
			background: ${({ theme }) => hexToRgba(theme.text.contrast, .2)};
			border-radius: 10px;
		}
	}

	html, body, #root {
		margin: 0;
		padding: 0;
		height: 100%;
		background: ${({ theme }) => theme.text.primary};
	}
`;
