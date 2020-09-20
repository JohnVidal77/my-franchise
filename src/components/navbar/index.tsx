import React from 'react';
import {Box, Flex, Avatar, IconButton, Image} from '@chakra-ui/core';

import Logo from '../../assets/logo-orange.png';

const Navbar: React.FC = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      width="100vw"
      height="16"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="grey.400"
      align="center"
      justify="space-between"
      boxSizing="border-box"
      paddingLeft="5"
      paddingRight="5"
      backgroundColor="blue.400">
      <Box>
        <Image src={Logo} width={['0', '3xs', '3xs', '3xs']} />
      </Box>
      <Flex align="center" justify="center" color="white">
        <IconButton
          aria-label="Notification"
          variant="outline"
          size="lg"
          icon="bell"
          marginRight="4"
        />
        <Avatar size="sm" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
