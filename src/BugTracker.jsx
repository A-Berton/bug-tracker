import React from 'react';
import { Card, CardBody } from '@chakra-ui/react';
import {BugStatus} from './BugStatus';
import bugs from './bugs.json';

function BugTracker() {

    const buglist = bugs.map(bug => 
        <Card key={bug.id}>
            <CardBody>
                <h2>{bug.title}</h2>
                <p>{bug.description}</p>
                <BugStatus status ={bug.status} />
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