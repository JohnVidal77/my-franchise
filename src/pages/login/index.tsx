import React from 'react';
import {Flex, Box, FormControl, Text, Image} from '@chakra-ui/core';

import ButtonGreen from '../../components/button';
import Input from '../../components/input';
import Link from '../../components/link';

import Logo from '../../assets/logo-orange.png';

const Login = () => {
  return (
    <Flex
      backgroundColor="blue.400"
      height="100vh"
      justifyContent="center"
      alignItems="center">
      <Box maxWidth="md" padding="4">
        <Image alt="MY|FRANCHISE logo" marginBottom="8" src={Logo} />
        <FormControl>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <ButtonGreen isDisabled>Login</ButtonGreen>
        </FormControl>
        <Text textAlign="center" marginBottom="4" color="white">
          Don't have an account?{' '}
          <Link title="SIGN UP" to="/register" fontWeight="600" />
        </Text>
        <Text textAlign="center" color="white">
          Forgot your password?{' '}
          <Link title="CLICK HERE" to="/forgot-password" fontWeight="600" />
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
