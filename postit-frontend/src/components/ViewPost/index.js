import React, { useContext, useCallback } from 'react';
import { ThemeContext } from 'styled-components';

import { MdChevronLeft } from 'react-icons/md';

import {
	Container,
	Header,
	Author,
	Avatar,
	Content,
} from './styles';

import { H3 } from 'components/Text';

const ViewPost = () => {

	const theme = useContext(ThemeContext);

	const handleBackClick = useCallback(() => {
		window.history.back();
	}, []);

	return (
		<Container>
			<Header>
				<MdChevronLeft size="48" color={theme.primary} onClick={handleBackClick}/>
				<Author>
					<H3>name</H3>
					<Avatar />
				</Author>
			</Header>

			<Content>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis, eius dolorum corporis ratione maxime, incidunt dolore veritatis eum tempore ullam sed architecto quibusdam voluptas. Dolor consequuntur est qui vitae.
			</Content>

		</Container>
	);
};

export default ViewPost;
