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
  Icon,
} from '@chakra-ui/core';

import Navbar from '../../components/navbar';

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
        <Divider />
        <InputGroup>
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input placeholder="Filter by unit" />
        </InputGroup>
      </Box>
    </>
  );
};

export default Dashboard;
