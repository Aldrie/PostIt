import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { ThemeContext } from 'styled-components';

import { H4 } from 'components/Text';
import { logOut } from 'state/ducks/auth/auth.actions';

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
	const dispath = useDispatch();
	const authState = useSelector(state => state.auth);
	const theme = useContext(ThemeContext);

	const handleLogout = () => {
		dispath(logOut());
	};

	return (
		<Container>
			<Aside>
				<Avatar src={authState.avatar || ''}/>
				<H4 color={theme.text.primary}>
					{authState.name || ''}
				</H4>
				<Nav>
					<NavLink to="/posts">
						Posts
					</NavLink>
					<NavLink to="/create" exact>
						Create
					</NavLink>
					<NavItem onClick={handleLogout}>
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
