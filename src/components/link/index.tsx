import React from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/core';
import {Link as RouterLink} from 'react-router-dom';

interface LinkInterface extends ChakraLinkProps {
  title: string;
  to: string;
}

const Link: React.FC<LinkInterface> = ({title, to, ...rest}) => {
  return (
    <ChakraLink {...rest}>
      <RouterLink to={to}>{title}</RouterLink>
    </ChakraLink>
  );
};

export default Link;
