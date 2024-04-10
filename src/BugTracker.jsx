import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, HStack } from '@chakra-ui/react';
import {BugStatus} from './BugStatus';
import bugs from './bugs.json';
import Users from './Users';
import { BugPriority } from './BugPriority';

function BugTracker() {
    

    const buglist = () =>{
        return(
            <TableContainer >
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Description</Th>
                            <Th>Status</Th>
                            <Th>Priority</Th>
                            <Th >Assignee</Th>
                            <Th>Create at</Th>
                            <Th>Updated at</Th>
                        </Tr>
                    </Thead>
                    { bugs.map(bug => (
                        <Tbody key={bug.id}>
                            <Tr>
                                <Td>{bug.title}</Td>
                                <Td>{bug.description}</Td>
                                <Td><BugStatus status ={bug.status} /></Td>
                                <Td><BugPriority priority = {bug.priority} /></Td>
                                <Td>
                                    <HStack>
                                        <Users />
                                    </HStack>
                                </Td>
                                <Td>{bug.created}</Td>
                                <Td>{bug.updated}</Td>
                            </Tr>
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        );
    };

    return (
        <div>
            {buglist()}
        </div>
  )
}

export default BugTracker