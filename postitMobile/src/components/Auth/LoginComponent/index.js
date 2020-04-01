import React from 'react';

import Button from '~/components/Button';
import AuthLayout from '~/layouts/Auth';
import Input from '~/components/Input';

const LoginComponent = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Register');
  };

  return (
    <AuthLayout
      title="Login"
      bottomText="Não possui cadastro? Clique aqui!"
      color="secondary"
      bottomTextOnPress={handlePress}
    >
      <Input
        icon="email"
        placeholder="email"
        color="secondary"
        marginBottom="16"
      />
      <Input
        icon="lock"
        placeholder="senha"
        color="secondary"
        password
        marginBottom="24"
      />
      <Button text="Login" color="secondary" />
    </AuthLayout>
  );
};

export default LoginComponent;
