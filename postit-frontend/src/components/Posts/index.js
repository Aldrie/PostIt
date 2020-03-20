import React, { useState, useRef, useContext } from 'react';
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

const PostComponent = ({ history }) => {
	const theme = useContext(ThemeContext);

	const [data, setData] = useState([
		{}, {}, {},{}, {}, {},{}, {}, {}
	]);

	const scrollRef = useRef(null);

	const handleScroll = () => {
		const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
		if( scrollTop + clientHeight >= scrollHeight) {
			console.log('Ao');
		}
	};

	const handlePostClick = (id) => {
		history.push(`/posts/${id}`);
	}

	const handleAvatarClick = (id) => {
		history.push(`/users/${id}`);
	}

	return (
		<Container>
			<H2>Latest posts:</H2>
			<Posts ref={scrollRef} onScroll={handleScroll}>
				{data.map((item, index) => (
					<Post
						key={index}
						even={index % 2 === 0}
						author={{ name: 'Alawdawdawdawdwdwaddrie' }}
						content="aooo"
						avatarClick={() => handleAvatarClick(index)}
						onClick={() => handlePostClick(index)}
					/>
				))}
				<Loading>
					<BeatLoader size="16px" color={theme.secondary} />
				</Loading>
			</Posts>
		</Container>
	);
};

export default withRouter(PostComponent);
