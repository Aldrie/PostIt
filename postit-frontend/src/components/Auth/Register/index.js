import React, { useCallback } from 'react';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md'

import Button from 'components/Button';
import Input from 'components/Input';
import { H1, Href } from 'components/Text';

import Dropzone from 'react-dropzone';

import {
	Title,
	Form,
	DropContainer,
} from '../styles';

const Register = () => {

	const renderUploadMessage = (isDragActive, isDragReject) =>  {
		if(isDragActive) {
			if(isDragReject) {
				return 'Unsupported file';
			}
			return 'Drop your image here!';
		}

		return 'Click or drop your avatar here!';
	}

	return(
		<>
			<Title>
				<H1>Register</H1>
			</Title>
			<Form>
				<Dropzone accept="image/*" onDropAccepted={() => {}}>
					{({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
						<DropContainer
							{...getRootProps()}
							isDragActive={isDragActive}
							isDragReject={isDragReject}
						>
							<input {...getInputProps()}/>
							<span>{renderUploadMessage(isDragActive, isDragReject)}</span>
						</DropContainer>
					)}
				</Dropzone>

				<Input type="name" placeholder="name" icon={MdPerson}/>
				<Input type="email" placeholder="email" icon={MdEmail}/>
				<Input type="password" placeholder="password" icon={MdLock}/>

				<Button>Register</Button>
				<Href to="/auth/login" color="primary">
					Already have an account? Click here!
				</Href>
			</Form>
		</>
	);
}

export default Register;
