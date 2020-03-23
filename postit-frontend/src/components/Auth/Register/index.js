import React, { useState, memo } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md'

import Button from 'components/Button';
import Input from 'components/Input';
import { H1, Href } from 'components/Text';

import {
	Title,
	Form,
	DropContainer,
} from '../styles';

const Register = ({ register, loading }) => {

	const [avatar, setAvatar] = useState({ preview: '', file: '' });
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
		accept: 'image/*',
		onDropAccepted: (files) => {
			setAvatar({
				preview: URL.createObjectURL(files[0]),
				file: files[0],
			});
		},
	});

	const renderUploadMessage = (isDragActive, isDragReject) =>  {
		if(isDragActive) {
			if(isDragReject) {
				return 'Unsupported file';
			}
			return 'Drop your image here!';
		}

		return 'Click or drop your avatar here!';
	};

	const handleRegister = (event) => {
		event.preventDefault();
		register(name, email, password, avatar.file);
	};
	
	return(
		<>
			<Title>
				<H1>Register</H1>
			</Title>
			<Form onSubmit={handleRegister}>
				<DropContainer
					{...getRootProps()}
					isDragActive={isDragActive}
					isDragReject={isDragReject}
					preview={avatar.preview}
				>
					<input {...getInputProps()}/>
					<span>{renderUploadMessage(isDragActive, isDragReject)}</span>
				</DropContainer>
				<Input
					type="name"
					placeholder="name"
					icon={MdPerson}
					onChange={(event) => setName(event.target.value)}
				/>
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

				<Button
					disabled={!(name && email && password) || loading}
					loading={loading}
				>
					Register
				</Button>
				<Href to="/login" color="primary">
					Already have an account? Login!
				</Href>
			</Form>
		</>
	);
}

export default memo(Register);
