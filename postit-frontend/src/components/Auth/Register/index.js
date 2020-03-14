import React from 'react';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md'

import Button from 'components/Button';
import Input from 'components/Input';
import { H1 } from 'components/Text';

import {
	Title,
	Form,
} from '../styles';

const Register = () => {
	return(
		<>
			<Title>
				<H1>Register</H1>
			</Title>
			<Form>
				<Input type="name" placeholder="name" icon={MdPerson}/>
				<Input type="email" placeholder="email" icon={MdEmail}/>
				<Input type="password" placeholder="password" icon={MdLock}/>
				<Button>Register</Button>
			</Form>
		</>
	);
}

export default Register;
