import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { hexToRgba } from '~/utils/styleUtils';

import {
  Container, Input as StyledInput, IconButton, Icon, StartIcon,
} from './styles';


const Input = ({
  icon, color, password, placeholder, marginBottom, ...rest
}) => {
  const [hide, setHide] = useState(!!password);

  const theme = useContext(ThemeContext);

  const handleIconClick = () => {
    setHide((oldState) => !oldState);
  };

  return (
    <Container marginBottom={marginBottom} color={color}>
      {icon && (
      <StartIcon>
        <Icon name={icon} color={color} />
      </StartIcon>
      )}
      <StyledInput
        placeholder={placeholder}
        placeholderTextColor={hexToRgba(theme.input[color].text, 0.5)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="off"
        secureTextEntry={hide}
        {...rest}
        color={color}
      />
      {password && (
      <IconButton onPress={handleIconClick}>
        <Icon name={hide ? 'eye-off' : 'eye'} color={color} />
      </IconButton>
      )}
    </Container>
  );
};

export default Input;
