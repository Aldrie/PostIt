import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { BeatLoader } from 'react-spinners';

import {
	Container,
	Header,
	Avatar,
	Posts,
} from './styles';

import Post from 'components/Post';
import { H3 } from 'components/Text';

const User = () => {
	const theme = useContext(ThemeContext);

	return (
		<Container>
			<Header>
				<Avatar />
				<H3>Name</H3>
			</Header>

			<Posts>
				<Post author={{ name: 'a' }} content="test"/>
				<BeatLoader size="16" color={theme.primary} />
			</Posts>
		</Container>
	);
};

export default User;
