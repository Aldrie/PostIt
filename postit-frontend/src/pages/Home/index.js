import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { ThemeContext } from 'styled-components';

import { H4 } from 'components/Text';

import {
	Container,
	Aside,
	Content,
	Nav,
	NavLink,
	NavItem,
	Avatar,
} from './styles';

const HomePage = ({ children }) => {
	const theme = useContext(ThemeContext);

	return (
		<Container>
			<Aside>
				<Avatar />
				<H4 color={theme.text.primary}>
					Name
				</H4>
				<Nav>
					<NavLink to="/posts">
						Posts
					</NavLink>
					<NavLink to="/create" exact>
						Create
					</NavLink>
					<NavItem>
						Logout
					</NavItem>
				</Nav>
			</Aside>
			<Content>
				{children}
			</Content>
		</Container>
	);
};

export default withRouter(HomePage);
