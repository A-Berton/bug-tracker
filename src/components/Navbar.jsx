import React from 'react';
import { Box, Flex, Heading, Spacer, Button, Modal, useDisclosure } from '@chakra-ui/react';
import Modalform from '../Modalform';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  return (
    <nav>
      <Flex mr={8} ml={8} mt={4} mb={8}>
      <Box p='2'>
        <Heading size='md'>Bug Tracker</Heading>
      </Box>
        <Spacer />
        <Button colorScheme='green' onClick={onOpen}>
          Add a Bug
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}><Modalform onClose={onClose}/></Modal>
      </Flex>
    </nav>
  )
}

export default Navbar;
