import React, { useState } from 'react';
import { Select, Stack, Tag, Center } from "@chakra-ui/react";

export function BugPriority({priority}) {
    const [bugpriority, setBugpriority] = useState(priority);

    const handleChange = (e) => {
        if(e.target.value === "High") {
            setBugpriority("High");
        } else if (e.target.value === "Medium") {
            setBugpriority("Medium");
        }else {
            setBugpriority("Low");
        }
    }

    const changeColor = () =>{
        if(bugpriority === "High") {
            return "red";
        } else if (bugpriority === "Medium") {
            return "yellow";
        }else {
            return "green";
        }
    }

    return (
        <div>
            <Stack spacing={4} direction='row' align='center'>
            <Select defaultValue={bugpriority} onChange = {handleChange} >
                <option value='High' >High </option>
                <option value='Medium'>Medium </option>
                <option value='Low'>Low </option>
            </Select>
            <Tag size = "lg" variant='solid' borderRadius='full' colorScheme={changeColor()}>
                <Center w = "120px">{bugpriority}</Center>
            </Tag>
            </Stack>
            
        </div>
    )
}