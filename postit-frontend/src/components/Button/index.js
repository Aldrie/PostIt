import React, { useContext, memo } from 'react';
import { ThemeContext } from 'styled-components';
import { PulseLoader } from 'react-spinners';

import { Button } from './styles';

const ButtonComponent = ({ color, loading, width, children }) => {
	const theme = useContext(ThemeContext);
	return (
		<Button color={color} width={width}>
			{loading ?
			<PulseLoader
				color={theme.text.primary}
				margin={6}
				loading
				size={12}
			/>
			: children}
		</Button>
	);
};

export default memo(ButtonComponent);
