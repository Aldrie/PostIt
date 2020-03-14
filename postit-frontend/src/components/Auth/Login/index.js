import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md'

import Button from 'components/Button';
import Input from 'components/Input';
import { H1 } from 'components/Text';

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
			</Form>
		</>
	);
}

export default Login;
