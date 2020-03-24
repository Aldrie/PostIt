import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPost } from 'state/ducks/posts/posts.actions';

import ViewPost from 'components/ViewPost';

const PostContainer = () => {
	const dispatch = useDispatch();
	const postState = useSelector(state => state.posts);

	const dispatchToProps = {
		loadPost: useCallback((id) => dispatch(loadPost(id)), [dispatch]),
	};

	const stateToProps = {
		post: postState.post,
		loading: postState.loading,
		error: postState.error,
	};

	return (
		<ViewPost {...dispatchToProps} {...stateToProps}/>
	);
};

export default PostContainer;
