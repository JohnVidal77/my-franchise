import React from 'react';
import {Flex, Box, Image, Text, FormControl} from '@chakra-ui/core';

import ButtonGreen from '../../components/button';
import Input from '../../components/input';
import Link from '../../components/link';

import Logo from '../../assets/logo-orange.png';

const ForgotPassword = () => {
  return (
    <Flex
      backgroundColor="blue.400"
      height="100vh"
      justifyContent="center"
      alignItems="center">
      <Link
        title="Voltar"
        to="/login"
        color="white"
        position="absolute"
        top="4"
        left="4"
      />

      <Box maxWidth="md" padding="4">
        <Image alt="MY|FRANCHISE" src={Logo} marginBottom="8" />
        <Text textAlign="center" marginBottom="4" color="white">
          Envie seu email e te mandaremos um link para recuperar a senha.
        </Text>
        <FormControl>
          <Input placeholder="Email" />
          <ButtonGreen isDisabled>Recuperar Sena</ButtonGreen>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
