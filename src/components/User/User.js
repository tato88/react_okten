import React from 'react';

const User = ({user,setUser}) => {
    const {name, id, username, email} = user

    return (
        <div>
            {id} -- {name} -- {username}
            <input type={"button"} value={'INFO'} onClick={setUser(user)}/>
        </div>
    );
};

export default User;