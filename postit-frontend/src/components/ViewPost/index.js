import React, { useContext, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import { PulseLoader } from 'react-spinners';

const ViewPost = ({ loadPost, post, loading, error }) => {
	const { id } = useParams();
	const theme = useContext(ThemeContext);

	const handleBackClick = useCallback(() => {
		window.history.back();
	}, []);

	useEffect(() => {
		loadPost(id);
	}, [id, loadPost]);

	return (
		<Container>
			{loading ? (
				<PulseLoader color={theme.primary}/>
			) : (
				<>
					<Header>
						<MdChevronLeft size="48" color={theme.primary} onClick={handleBackClick}/>
							<Author>
								<H3>{post?.author?.name || ''}</H3>
								<Avatar src={post?.author?.avatar}/>
							</Author>
					</Header>

					<Content>
						{post?.content || ''}
					</Content>
				</>
			)}
		</Container>
	);
};

export default ViewPost;
