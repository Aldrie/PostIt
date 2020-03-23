import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateComponent from 'components/Create';
import { createPost } from 'state/ducks/posts/posts.actions';

const CreateContainer = () => {
	const dispatch = useDispatch();
	const postState = useSelector(state => state.posts);

	const dispatchToProps = {
		create: useCallback((content) => dispatch(createPost(content)), [dispatch]),
	};

	const stateToProps = {
		loading: postState.loading,
		error: postState.error,
	};

	return (
		<CreateComponent {...dispatchToProps} {...stateToProps} />
	);
};

export default CreateContainer;
