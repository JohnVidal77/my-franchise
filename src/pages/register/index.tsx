import React, {useRef} from 'react';

import {SubmitHandler, FormHandles} from '@unform/core';

import {Form} from '@unform/web';

import {useHistory} from 'react-router-dom';

import {
  Grid,
  Box,
  Image,
  Heading,
  Text,
  Divider,
  useToast,
} from '@chakra-ui/core';

import Input from '../../components/input';

import ButtonGreen from '../../components/button';

import Link from '../../components/link';

import Logo from '../../assets/logo-orange.png';

const Register = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const toast = useToast();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));

    // TODO: Add Validation
    toast({
      position: 'bottom-right',
      title: 'User Created',
      description: 'Your user was saved on localstorage',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    history.push('/login');
  };

  return (
    <Grid
      backgroundColor="blue.400"
      minHeight="100vh"
      height={['100%', '100vh', '100vh', '100vh']}
      templateColumns="1fr"
      templateRows="150px 1fr">
      <Link
        title="Voltar"
        to="/login"
        color="white"
        position="absolute"
        top="4"
        left="4"
      />

      <Box>
        <Image
          alt="MY|FRANCHISE logo"
          width={['32', '48', '56']}
          marginLeft="auto"
          marginRight="auto"
          marginTop="4"
          marginBottom="4"
          src={Logo}
        />

        <Heading textAlign="center" fontSize="lg" color="white">
          Welcome!
        </Heading>

        <Text textAlign="center" fontSize="md" color="white">
          We want to get to know you better! Start filling out all the entries
          below.
        </Text>
      </Box>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Grid
          height="100%"
          templateColumns={['1fr', '1fr 500px 500px 1fr']}
          templateRows={['', '5fr 1fr']}
          templateAreas={[
            "'company' 'user' 'action'",

            " '. company user .' '. action action .'",
          ]}
          gridGap="4">
          <Box gridArea="company" color="white">
            <fieldset>
              <legend>Dados da empresa</legend>

              <Divider />

              <Input
                name="company.name"
                type="text"
                placeholder="Company Name"
              />

              <Input
                name="company.document"
                type="text"
                placeholder="Document"
              />
            </fieldset>
          </Box>

          <Box gridArea="user" color="white">
            <fieldset>
              <legend>Dados do usuário</legend>

              <Divider />

              <Input name="name" type="text" placeholder="Name" />

              <Input name="email" type="email" placeholder="Email" />

              <Input name="password" type="password" placeholder="Password" />
            </fieldset>
          </Box>

          <Box gridArea="action">
            <ButtonGreen type="submit">REGISTER</ButtonGreen>
          </Box>
        </Grid>
      </Form>
    </Grid>
  );
};

export default Register;
