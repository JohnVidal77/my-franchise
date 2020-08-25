import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  Text,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/core';

import ButtonGreen from '../../components/button';
import Input from '../../components/input';

import Logo from '../../assets/logo-orange.png';

const Login = () => {
  return (
    <Flex
      backgroundColor="blue.400"
      height="100vh"
      justifyContent="center"
      alignItems="center">
      <Box maxWidth="md">
        <Image alt="MY|FRANCHISE logo" marginBottom="8" src={Logo} />
        <FormControl>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <ButtonGreen isDisabled>Entrar</ButtonGreen>
        </FormControl>
        <Text textAlign="center" marginBottom="4" color="white">
          Ainda não é cadastrado?{' '}
          <RouterLink to="/register">
            <ChakraLink fontWeight="600">CADASTRE-SE AGORA</ChakraLink>
          </RouterLink>
        </Text>
        <Text textAlign="center" color="white">
          Esqueceu a senha?{' '}
          <RouterLink to="/forgot-password">
            <ChakraLink fontWeight="600">CLIQUE AQUI</ChakraLink>
          </RouterLink>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
