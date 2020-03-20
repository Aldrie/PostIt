import React, { useState, memo } from 'react';
import { MdEmail, MdLock } from 'react-icons/md'

import Button from 'components/Button';
import Input from 'components/Input';
import { H1, Href } from 'components/Text';

import {
	Title,
	Form,
} from '../styles';

const Login = ({ login }) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (event) => {
		event.preventDefault();
		login(email, password);
	};

	return(
		<>
			<Title>
				<H1>Login</H1>
			</Title>
			<Form onSubmit={handleLogin}>
				<Input
					type="email"
					placeholder="email"
					icon={MdEmail}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<Input
					type="password"
					placeholder="password"
					icon={MdLock}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<Button disabled={!(email && password)}>Login</Button>
				<Href to="/register" color="primary">
					Don't have an account? Register!
				</Href>
			</Form>
		</>
	);
}

export default memo(Login);
