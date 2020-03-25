import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserComponent from 'components/User';
import { loadUser, loadUserPosts, clearUserState } from 'state/ducks/user/user.actions';

const UserContainer = () => {
	const dispatch = useDispatch();
	const userState = useSelector(state => state.user);

	const dispatchToProps = {
		loadPosts: useCallback((userId, last) => 
		dispatch(
			loadUserPosts(userId, last),
		), [dispatch]),
		clear: useCallback(() => 
		dispatch(
			clearUserState(),
		), [dispatch]),
	};

	const stateToProps = {
		posts: userState.posts,
		user: userState,
		loading: userState.loading,
		error: userState.error,
	};

	return (
		<UserComponent {...dispatchToProps} {...stateToProps} />
	);
};

export default UserContainer;
