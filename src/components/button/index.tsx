import React from 'react';
import {
  Button as ChakraBtn,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/core';

const ButtonGreen: React.FC<ChakraButtonProps> = ({children, ...rest}) => {
  return (
    <ChakraBtn
      backgroundColor="green.400"
      height="12"
      borderRadius="md"
      color="white"
      marginBottom="4"
      marginLeft="auto"
      marginRight="auto"
      display="block"
      _hover={{backgroundColor: 'green.500'}}
      {...rest}>
      {children}
    </ChakraBtn>
  );
};

export default ButtonGreen;
