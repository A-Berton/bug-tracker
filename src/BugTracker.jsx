import React from 'react';
import { Card, CardBody, Stack } from '@chakra-ui/react';
import {BugStatus} from './BugStatus';
import bugs from './bugs.json';
import { BugPriority } from './BugPriority';

function BugTracker() {

    const buglist = bugs.map(bug => 
        <Card key={bug.id}>
            <CardBody>
                <h2>{bug.title}</h2>
                <p>{bug.description}</p>
                <Stack spacing={4} direction='row' align='center'>
                    <BugStatus status ={bug.status} />
                    <BugPriority priority = {bug.priority} />
                </Stack>
            </CardBody>
        </Card>
    )

    return (
        <div>
            <ul>
                {buglist}
            </ul>
        </div>
  )
}

export default BugTracker