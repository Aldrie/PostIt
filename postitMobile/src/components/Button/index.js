import React, { useContext, memo } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, Gradient } from './styles';
import Text from '~/components/Text';

const Button = ({
  text, color, textSize, children, ...rest
}) => {
  const theme = useContext(ThemeContext);

  const themeColors = theme.buttons[color || 'primary'];

  return (
    <Container {...rest}>
      <Gradient {...themeColors.background}>
        {children || (
        <Text color={themeColors.text} size={textSize || '28'} bold>
          {text}
        </Text>
        )}
      </Gradient>
    </Container>
  );
};

export default memo(Button);
