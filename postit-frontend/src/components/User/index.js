import React, { useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router';

import { ThemeContext } from 'styled-components';
import { BeatLoader } from 'react-spinners';

import {
	Container,
	Header,
	Avatar,
	Posts,
	Loading,
} from './styles';

import Post from 'components/Post';
import { H3 } from 'components/Text';

const User = ({
	loadPosts,
	clear,
	user,
	posts,
	loading,
	error,
}) => {
	const scrollRef = useRef(null);
	const theme = useContext(ThemeContext);

	const { id } = useParams();

	const handleScroll = () => {
		const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
		if(scrollTop + clientHeight>= (scrollHeight - 1) && !loading) {
			const lastPost = posts[posts.length -1];
			if(lastPost) {
				loadPosts(lastPost._id);
			}
		}
	};

	useEffect(() => {
		loadPosts(id);

		return () => clear();
	}, []);

	return (
		<Container>
			<Header>
				<Avatar src={user?.avatar || ''}/>
				<H3>{user?.name || <BeatLoader size="16px" color={theme.primary} />}</H3>
			</Header>

			<Posts ref={scrollRef} onScroll={handleScroll}>
				{posts && posts.map(post => 
					<Post key={post._id} author={user} content={post.content}/>)
				}
			</Posts>
			{loading && 
				<Loading>
					<BeatLoader size="16px" color={theme.secondary} />
				</Loading>
			}
		</Container>
	);
};

export default User;
