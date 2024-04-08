import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";

export function BugStatus({status}) {
    const [bugstatus, setBugstatus] = useState(status);
    const [color, setColor] = useState("green");

    const handleClick = () => {
        setBugstatus(bugstatus === "Open" ? "Closed" : "Open");
        setColor(color === "green" ? "red" : "green");
    }

    return (
        <div>
            <Button onClick = {handleClick} colorScheme = {color}> {bugstatus}</Button>
        </div>
    )
}