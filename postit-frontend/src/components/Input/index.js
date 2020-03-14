import React, { useContext, memo, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { ThemeContext } from 'styled-components';

import { Container, Input, IconButton } from './styles';

const ButtonComponent = ({ ...rest }) => {
	const theme = useContext(ThemeContext);
	const [show, setShow] = useState(false);

	const handleShowClick = () => {
		setShow((oldState) => !oldState);
	}

	return (
		<Container>
			<Input {...rest} type={rest.type === 'password' ? show ? 'text' : 'password' : rest.type } />
			{rest.type === 'password' && 
				<IconButton onClick={handleShowClick}>
					{show ? <IoMdEye size={25}/>
						: <IoMdEyeOff size={25}/>}
				</IconButton>
			}
		</Container>
	);
};

export default memo(ButtonComponent);
