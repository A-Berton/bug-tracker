import React, { useState } from 'react';
import { Box, Flex, Heading, Spacer, Button, Modal } from '@chakra-ui/react';
import Modalform from './Modalform';
import Filter from './Filter';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <nav>
      <Flex mr={8} ml={8} mt={4} mb={8}>
      <Box p='2'>
        <Heading size='md'>Bug Tracker</Heading>
      </Box>
        <Spacer />
        <Filter />
        <Button ml={2} colorScheme = 'green' onClick={handleOpenModal}>
          Add a Bug
        </Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <Modalform onClose={handleCloseModal} />
        </Modal>
      </Flex>
    </nav>
  );
}

export default Navbar;
