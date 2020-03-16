import React from 'react';

import {
	Container,
	Aside,
	Content,
	Nav,
	NavLink,
	Avatar,
} from './styles';
import { withRouter } from 'react-router';

const HomePage = ({ children }) => {
	return (
		<Container>
			<Aside>
				<Avatar />
				<Nav>
					<NavLink to="/home" exact>
						Home
					</NavLink>
					<NavLink to="/home/create" exact>
						Posts
					</NavLink>
				</Nav>
			</Aside>
			<Content>
				{children}
			</Content>
		</Container>
	);
};

export default withRouter(HomePage);
