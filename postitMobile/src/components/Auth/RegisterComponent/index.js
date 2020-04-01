import React from 'react';

import Button from '~/components/Button';
import AuthLayout from '~/layouts/Auth';
import Input from '~/components/Input';

const RegisterComponent = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthLayout
      title="Cadastro"
      bottomText="Já possui cadastro? Clique aqui!"
      color="primary"
      bottomTextOnPress={handlePress}
    >
      <Input
        icon="account"
        placeholder="nome"
        color="primary"
        marginBottom="16"
      />
      <Input
        icon="email"
        placeholder="email"
        color="primary"
        marginBottom="16"
      />
      <Input
        icon="lock"
        placeholder="senha"
        color="primary"
        password
        marginBottom="24"
      />
      <Button text="Registro" color="primary" />
    </AuthLayout>
  );
};

export default RegisterComponent;
