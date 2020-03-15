import React from 'react';

import {
	Container,
	Aside,
	Content,
	Nav,
	NavLink,
	AvatarContainer,
	Avatar,
} from './styles';
import { withRouter } from 'react-router';

const HomePage = ({ children }) => {
	return (
		<Container>
			<Aside>
				<AvatarContainer>
					<AvatarContainer />
				</AvatarContainer>
				<Nav>
					<NavLink to="/home" exact>
						Home
					</NavLink>
					<NavLink to="/home/posts" exact>
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
