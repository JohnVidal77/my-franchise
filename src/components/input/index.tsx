import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/core';

interface InputProps extends ChakraInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({name, ...rest}) => {
  const inputRef = useRef(null);
  const {fieldName, defaultValue, registerField} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <ChakraInput
      ref={inputRef}
      defaultValue={defaultValue}
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
