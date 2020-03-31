import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components';

import Text from '~/components/Text';
import {
  Container, Form, Header, Presentation, BottomText,
} from './styles';

const AuthLayout = ({
  title, color, bottomText, bottomTextOnPress, children,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <StatusBar backgroundColor={theme[color].color} />
      <Header color={theme[color].color}>
        <Text color={theme[color].text} size="36" bold>{title}</Text>
      </Header>
      <Presentation>
        <Text size="92" color={theme[color].color}>PostIt</Text>
      </Presentation>
      <Form>
        {children}
        <BottomText onPress={bottomTextOnPress}>
          <Text size="20" color={theme[color].color}>
            {bottomText}
          </Text>
        </BottomText>
      </Form>

    </Container>
  );
};

export default AuthLayout;
