import React, { useEffect, useRef, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { BeatLoader } from 'react-spinners';

import { H2 } from 'components/Text';
import Post from 'components/Post';

import {
	Container,
	Posts,
	Loading,
} from './styles';

const PostComponent = ({ history, loadPosts, posts, loading, error }) => {
	const theme = useContext(ThemeContext);

	const scrollRef = useRef(null);

	const handleScroll = () => {
		const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
		if(scrollTop + clientHeight>= (scrollHeight - 1) && !loading) {
			const lastPost = posts[posts.length -1];
			if(lastPost) {
				loadPosts(lastPost._id);
			}
		}
	};

	const handlePostClick = (id) => {
		history.push(`/posts/${id}`);
	}

	const handleAvatarClick = (id) => {
		history.push(`/users/${id}`);
	}

	useEffect(() => {
		if(posts?.length <= 0) {
			loadPosts();
		}
	}, [loadPosts, posts]);

	return (
		<Container>
			<H2>Latest posts:</H2>
			<Posts ref={scrollRef} onScroll={handleScroll}>
				{posts && posts.map((post, index) => (
					<Post
						key={post._id}
						even={index % 2 === 0}
						author={post.author}
						content={post.content}
						avatarClick={() => handleAvatarClick(post.author._id)}
						onClick={() => handlePostClick(post._id)}
					/>
				))}
			</Posts>
			<Loading>
				{loading && <BeatLoader size="16px" color={theme.secondary} />}
			</Loading>
		</Container>
	);
};

export default withRouter(PostComponent);
