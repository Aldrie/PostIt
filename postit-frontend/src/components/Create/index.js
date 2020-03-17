import React from 'react';

import { H2 } from 'components/Text';
import Button from 'components/Button';

import {
	Container,
	Form,
	TextArea,
	Buttons,
} from './styles';

const Create = () => {
	return(
		<Container>
			<H2>Create new post:</H2>
			<Form>
				<TextArea placeholder="Content"/>
				<Buttons>
					<Button color="primary" width="100px" type="reset">
						Reset
					</Button>
					<Button color="secondary" width="100px" type="submit">
						Post
					</Button>
				</Buttons>
			</Form>
		</Container>
	);
}

export default Create;
