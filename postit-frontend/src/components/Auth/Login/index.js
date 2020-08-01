import React, { useState, memo, useRef } from 'react';
import { MdEmail, MdLock } from 'react-icons/md'

import Button from 'components/Button';
import Input from 'components/Input';
import { H1, Href } from 'components/Text';

import {
	Title,
	Form,
} from '../styles';
import { useEffect } from 'react';

const Login = ({ login, loading, error }) => {

	const emailInput = useRef(null);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (event) => {
		event.preventDefault();
		login(email, password);
	};

	useEffect(() => {
		console.log(emailInput.current)
	}, []);

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
				ref={emailInput}
					type="password"
					placeholder="password"
					icon={MdLock}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<Button disabled={!(email && password)} loading={loading}>
					Login
				</Button>
				<Href to="/register" color="primary">
					Don't have an account? Register!
				</Href>
			</Form>
		</>
	);
}

export default memo(Login);
