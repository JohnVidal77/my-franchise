import React from 'react';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/core';

const Input: React.FC<ChakraInputProps> = ({...rest}) => {
  return (
    <ChakraInput
      marginBottom="4"
      borderRadius="md"
      height="12"
      backgroundColor="blue.400"
      focusBorderColor="yellow.400"
      color="white"
      _placeholder={{color: 'white'}}
      {...rest}
    />
  );
};

export default Input;
