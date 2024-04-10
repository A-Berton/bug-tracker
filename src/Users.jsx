import React, { useState, useEffect } from 'react';
import { HStack } from '@chakra-ui/react';

function Users() {
    const [users, setUsers] = useState([]);
    const [randomUser, setRandomUser] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/users?limit=5&&select=firstName,lastName,image')
        .then(res => res.json())
        .then(data => {
            setUsers(data.users);
            const randomIndex = Math.floor(Math.random() * data.users.length);
            setRandomUser(data.users[randomIndex]);
        });
      }, []);

  if (!randomUser) {
    return <p>John Smith</p>;
  }

  return (
    <HStack key={randomUser.id}>
        <img src={randomUser.image} alt="avatar" width="50" height="50" />
        <p>{randomUser.firstName} {randomUser.lastName}</p>
    </HStack>    
  );
}

export default Users;