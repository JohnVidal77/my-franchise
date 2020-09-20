import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  InputGroup,
  Input,
  InputLeftElement,
  FormControl,
  FormLabel,
  Icon,
} from '@chakra-ui/core';

import Navbar from '../../components/navbar';
import InfoCard from '../../components/info-card';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box boxSizing="border-box" paddingLeft="20" paddingRight="20">
        <Flex marginTop="24">
          <Box>
            <Heading fontSize="xl" marginBottom="3" color="yellow.400">
              Hello My|Franchise
            </Heading>
            <Text color="grey.800">
              You have <strong>5</strong> stores
            </Text>
          </Box>
        </Flex>
        <Divider marginTop="8" />
        <FormControl marginTop="8">
          <FormLabel htmlFor="search">Filter by unit</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<Icon name="search" color="gray.300" />}
            />
            <Input
              type="text"
              id="search"
              aria-describedby="search-helper-text"
            />
          </InputGroup>
        </FormControl>
        <Flex>
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </Flex>
      </Box>
    </>
  );
};

export default Dashboard;
