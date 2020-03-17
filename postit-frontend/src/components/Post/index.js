import React, { memo } from 'react';

import {
	Container,
	Author,
	Avatar,
	Content,
} from './styles';

const Post = ({ author, content, even, avatarClick, onClick }) => {
	return (
		<Container even={even}>
			<Author>
				<span>{author.name || ''}</span>
				<Avatar src={author.avatar} onClick={avatarClick}/>
			</Author>
			<Content onClick={onClick}>
				{content}
			</Content>
		</Container>
	);
};

export default memo(Post);
