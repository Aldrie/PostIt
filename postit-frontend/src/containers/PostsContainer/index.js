import React, { useCallback } from 'react';
import PostComponent from 'components/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from 'state/ducks/posts/posts.actions';

const PostContainer = () => {
	const dispatch = useDispatch();
	const postsState = useSelector(state => state.posts);

	const dispatchToProps = {
		loadPosts: useCallback((last) => dispatch(loadPosts(last)), [dispatch]),
	};

	const stateToProps = {
		posts: postsState.posts,
		loading: postsState.loading,
		error: postsState.error,
	}
	return (
		<PostComponent {...dispatchToProps} {...stateToProps} />
	);
};

export default PostContainer;
