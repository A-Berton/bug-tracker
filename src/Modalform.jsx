import React from "react";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Form from "./Form";
const Modalform = ({ onClose }) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form onClose={onClose}/>
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default Modalform;
