import React, { useContext, memo } from 'react';
import { ThemeContext } from 'styled-components';
import { PulseLoader } from 'react-spinners';

import { Button } from './styles';

const ButtonComponent = ({ color, loading, width, children, ...rest }) => {
	const theme = useContext(ThemeContext);
	return (
		<Button color={color} width={width} {...rest}>
			{loading ?
			<PulseLoader
				color={theme.text.primary}
				margin={2}
				loading
				size={8}
			/>
			: children}
		</Button>
	);
};

export default memo(ButtonComponent);
