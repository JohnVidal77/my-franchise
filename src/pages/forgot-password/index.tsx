import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {SubmitHandler, FormHandles} from '@unform/core';
import {Form} from '@unform/web';
import {Flex, Box, Image, Text, useToast} from '@chakra-ui/core';

import ButtonGreen from '../../components/button';
import Input from '../../components/input';
import Link from '../../components/link';

import Logo from '../../assets/logo-orange.png';

type FormData = {
  email: string;
};

const ForgotPassword = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const toast = useToast();

  const handleSubmit: SubmitHandler<FormData> = (data): void => {
    if (!data.email) {
      toast({
        position: 'bottom-right',
        title: 'Enter an email',
        description:
          'Your need to enter an email so we can send the instructions',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    toast({
      position: 'bottom-right',
      title: 'Email recovered',
      description: 'The instructions was sent to your email',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    history.push('/login');
  };

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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />
          <ButtonGreen type="submit">Send Instructions</ButtonGreen>
        </Form>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
