import React from 'react';
import {
  Grid,
  Box,
  Image,
  Heading,
  Text,
  FormControl,
  Divider,
} from '@chakra-ui/core';

import Input from '../../components/input';
import ButtonGreen from '../../components/button';
import Logo from '../../assets/logo-orange.png';
import Link from '../../components/link';

const Register = () => {
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
          Seja bem vindo!
        </Heading>
        <Text textAlign="center" fontSize="md" color="white">
          Passo 1 de 3: Queremos te conhecer melhor! Comece preenchendo os dados
          abaixo.
        </Text>
      </Box>

      <FormControl padding="4">
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
              <Input placeholder="Razão Social" />
              <Input placeholder="CNPJ" />
            </fieldset>
          </Box>
          <Box gridArea="user" color="white">
            <fieldset>
              <legend>Dados do usuário</legend>
              <Divider />
              <Input placeholder="Nome" />
              <Input placeholder="Email" />
              <Input placeholder="Senha" />
            </fieldset>
          </Box>
          <Box gridArea="action">
            <ButtonGreen isDisabled>CADASTRAR</ButtonGreen>
          </Box>
        </Grid>
      </FormControl>
    </Grid>
  );
};

export default Register;
