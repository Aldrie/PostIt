import React, { useState } from 'react';

import { H2 } from 'components/Text';
import Button from 'components/Button';

import {
	Container,
	Form,
	TextArea,
	Buttons,
} from './styles';
import { memo } from 'react';

const Create = ({ create, loading, error }) => {
	const [content, setContent] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		create(content);
	};

	return(
		<Container>
			<H2>Create new post:</H2>
			<Form onSubmit={handleSubmit}>
				<TextArea placeholder="Content" onChange={(event) => setContent(event.target.value)}/>
				<Buttons>
					<Button color="primary" width="100px" type="reset">
						Reset
					</Button>
					<Button
						color="secondary"
						width="100px"
						type="submit"
						loading={loading}
						disabled={loading || !content}
					>
						Post
					</Button>
				</Buttons>
			</Form>
		</Container>
	);
}

export default memo(Create);
