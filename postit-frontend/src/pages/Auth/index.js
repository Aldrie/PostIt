import React from 'react';

import {
	Container,
	Box,
} from './styles';

const AuthPage = ({ children }) => {
	return (
		<Container>
			<Box>
				{children}
			</Box>
		</Container>
	);
}

export default AuthPage;
