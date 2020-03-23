import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		outline: none;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		font-family: Josefin Sans, sans-serif;
		-webkit-tap-highlight-color: transparent;
	}

	html, body, #root {
		margin: 0;
		padding: 0;
		height: 100%;
		background: ${({ theme }) => theme.text.primary};
	}
`;
