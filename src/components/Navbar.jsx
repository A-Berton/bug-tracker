import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import {AddIcon} from '@chakra-ui/icons';

function Navbar() {
  return (
    <nav>
      <Flex mr={8} ml={8} mt={4} mb={8}>
      <Box p='2'>
        <Heading size='md'>Bug Tracker</Heading>
      </Box>
        <Spacer />
        <Button colorScheme='green'>
          Add a Bug
        </Button>
      </Flex>
    </nav>
  )
}

export default Navbar;
