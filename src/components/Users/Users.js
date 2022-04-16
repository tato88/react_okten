import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {usersService} from "../../services/users.service";


const Users = ({setUser,setUserId}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setUser={setUser} setUserId={setUserId}/>)}
        </div>
    );
};

export default Users;