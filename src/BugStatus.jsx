import React, { useState } from 'react';

export function BugStatus({status}) {
    const [bugstatus, setBugstatus] = useState(status);

    const handleClick = () => {
        setBugstatus(bugstatus === "Open" ? "Closed" : "Open");
    }

    return (
        <div>
            <button onClick = {handleClick}> {bugstatus}</button>
        </div>
    )
}