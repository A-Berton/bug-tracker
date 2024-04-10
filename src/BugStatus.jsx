import React, { useState, useEffect } from 'react';
import { Button } from "@chakra-ui/react";

export function BugStatus({status}) {
    const [bugstatus, setBugstatus] = useState(status);
    const [color, setColor] = useState();

    useEffect(() => {
        setColor(changeColor());
    })

    const handleClick = () => {
        setBugstatus(bugstatus === "Open" ? "Closed" : "Open");
        setColor(changeColor());
    }

    const changeColor = () =>{
        if(bugstatus === "Open") {
            return "green";
        } else {
            return "red";
        }
    }

    return (
        <div>
            <Button onClick = {handleClick} colorScheme = {color}> {bugstatus}</Button>
        </div>
    )
}
