import React from 'react';
import {Button, Flex, Box, Text, Icon} from '@chakra-ui/core';
import {MdSettings} from 'react-icons/md';

const InfoCard: React.FC = () => {
  return (
    <Button>
      <Flex>
        <Box>
          <Icon as={MdSettings} />
        </Box>
        <Box>
          <Text>Item 1</Text>
          <Text>@status</Text>
        </Box>
      </Flex>
    </Button>
  );
};

export default InfoCard;
