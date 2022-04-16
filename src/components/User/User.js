import React from 'react';

const User = ({user,setInfoId}) => {
    const {name, id, username, email} = user

    return (
        <div>
            {id} -- {name} -- {username}
            <input type={"button"} value={'INFO'} onClick={setInfoId(id)}/>
        </div>
    );
};

export default User;