import React from 'react';
import {Form} from '@unform/web';
import {Flex, Box, Text, Image, useToast} from '@chakra-ui/core';

import ButtonGreen from '../../components/button';
import Input from '../../components/input';
import Link from '../../components/link';

import Logo from '../../assets/logo-orange.png';

type User = {
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  const toast = useToast();

  function handleSubmit(data: User) {
    const userTryingToLogin = data;

    const userSaved: string | null = localStorage.getItem('userInfo');
    const userObj: User = userSaved && JSON.parse(userSaved);

    if (!userObj) {
      return toast({
        position: 'bottom-right',
        title: 'User not found',
        description: 'Your user was not found',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

    if (userObj.email !== userTryingToLogin.email) {
      return toast({
        position: 'bottom-right',
        title: 'Email not matche',
        description: "Email doesn't matche with our registers",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

    if (userObj.password !== userTryingToLogin.password) {
      return toast({
        position: 'bottom-right',
        title: 'Password not matche',
        description: "Password doesn't matche with our registers",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

    toast({
      position: 'bottom-right',
      title: 'User Created',
      description: 'Your user was saved on localstorage',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <Flex
      backgroundColor="blue.400"
      height="100vh"
      justifyContent="center"
      alignItems="center">
      <Box maxWidth="md" padding="4">
        <Image alt="MY|FRANCHISE logo" marginBottom="8" src={Logo} />
        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <ButtonGreen type="submit">Login</ButtonGreen>
        </Form>
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
