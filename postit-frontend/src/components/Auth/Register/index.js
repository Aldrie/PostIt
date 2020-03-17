import React, { useState } from 'react';
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

const Register = () => {

	const [uploadPreview, setUploadPreview] = useState(null);

	const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
		accept: 'image/*',
		onDropAccepted: (files) => {
			setUploadPreview(URL.createObjectURL(files[0]));
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
	}

	return(
		<>
			<Title>
				<H1>Register</H1>
			</Title>
			<Form>
				<DropContainer
					{...getRootProps()}
					isDragActive={isDragActive}
					isDragReject={isDragReject}
					preview={uploadPreview}
				>
					<input {...getInputProps()}/>
					<span>{renderUploadMessage(isDragActive, isDragReject)}</span>
				</DropContainer>
				<Input type="name" placeholder="name" icon={MdPerson}/>
				<Input type="email" placeholder="email" icon={MdEmail}/>
				<Input type="password" placeholder="password" icon={MdLock}/>

				<Button>Register</Button>
				<Href to="/login" color="primary">
					Already have an account? Login!
				</Href>
			</Form>
		</>
	);
}

export default Register;
