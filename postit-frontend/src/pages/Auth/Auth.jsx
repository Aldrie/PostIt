import React from 'react';

import {
  Container
} from './styles';

const AuthPage = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	);
}

export default AuthPage;
