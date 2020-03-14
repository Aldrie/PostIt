import React, { useContext, memo, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { ThemeContext } from 'styled-components';

import { Container, Input, IconButton, StartIcon } from './styles';

const ButtonComponent = ({ icon: Icon,...rest }) => {
	const theme = useContext(ThemeContext);
	const [show, setShow] = useState(false);

	const handleShowClick = () => {
		setShow((oldState) => !oldState);
	}

	return (
		<Container>
			{Icon && 
				<StartIcon>
					<Icon color={theme.primary}/>
				</StartIcon>
			}
			<Input {...rest} type={rest.type === 'password' ? show ? 'text' : 'password' : rest.type } />
			{rest.type === 'password' && 
				<IconButton onClick={handleShowClick}>
					{show ? <IoMdEye size={25} color={theme.primary}/>
						: <IoMdEyeOff size={25} color={theme.primary}/>}
				</IconButton>
			}
		</Container>
	);
};

export default memo(ButtonComponent);
