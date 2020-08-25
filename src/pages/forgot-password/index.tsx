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
        title="Back"
        to="/login"
        color="white"
        position="absolute"
        top="4"
        left="4"
      />

      <Box maxWidth="md" padding="4">
        <Image alt="MY|FRANCHISE" src={Logo} marginBottom="8" />
        <Text textAlign="center" marginBottom="4" color="white">
          Enter your email and we'll send and email with instructions.
        </Text>
        <FormControl>
          <Input name="email" placeholder="Email" />
          <ButtonGreen isDisabled>Send Instructions</ButtonGreen>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
