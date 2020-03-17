import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md'

import Button from 'components/Button';
import Input from 'components/Input';
import { H1, Href } from 'components/Text';

import {
	Title,
	Form,
} from '../styles';

const Login = () => {
	return(
		<>
			<Title>
				<H1>Login</H1>
			</Title>
			<Form>
				<Input type="email" placeholder="email" icon={MdEmail}/>
				<Input type="password" placeholder="password" icon={MdLock}/>
				<Button>Login</Button>
				<Href to="/register" color="primary">
					Don't have an account? Register!
				</Href>
			</Form>
		</>
	);
}

export default Login;
