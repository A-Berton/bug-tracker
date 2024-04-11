import React from "react";
import { FormControl, FormLabel, Input, Button, Select } from "@chakra-ui/react";

const Form = ({onClose}) => {
  const [bug, setBug] = React.useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    created: new Date(),
    updated: new Date(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBug = {
      id: bug.length + 1,
      title: bug.title,
      description: bug.description,
      status: bug.status,
      priority: bug.priority,
      created: new Date(),
      updated: new Date(),
    };
    setBug([newBug]);
    console.log("bug : ", newBug);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          placeholder="Bug title"
          value={bug.title}
          size="lg"
          onChange={(event) => setBug({ ...bug, title: event.target.value })}
        />
      </FormControl>
      <FormControl isRequired mt={6}>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          placeholder="Bug description"
          value={bug.description}
          size="lg"
          onChange={(event) => setBug( { ...bug, description: event.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Status</FormLabel>
        <Select placeholder="Select option" onChange={(event) => setBug({ ...bug, status: event.target.value })}>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Priority</FormLabel>
        <Select placeholder="Select option" onChange={(event) => setBug({ ...bug, prioritygit add: event.target.value })}>
          <option value="Open">Low</option>
          <option value="Closed">Medium</option>
          <option value="Closed">High</option>
        </Select>
      </FormControl>
      <Button
        variantColor="teal"
        variant="outline"
        type="submit"
        width="full"
        mt={4}
        onClick={onClose}
      >
        Register
      </Button>
    </form>
  );
};

export default Form;
