import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from 'components/Button';

import {
	Container,
} from './styles';
import { H1 } from 'components/Text';

const PresentationPage = ({ history }) => {

	const handleRoute = (path) => {
		history.push(path);
	};

	return(
		<Container>
			<H1>PostIt!</H1>
			<Button color="primary" onClick={() => handleRoute('/auth/login')}>Login</Button>
			<Button color="secondary" onClick={() => handleRoute('/auth/register')}>Register</Button>
		</Container>
	);
};

export default withRouter(PresentationPage);
