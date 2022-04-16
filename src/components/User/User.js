import React from 'react';

const User = ({user, setUser, setUserId}) => {
    const {name, id, username, email} = user
    const click = () => {
        setUser(user)
        setUserId(false)
    }
    return (
        <div>
            {id} -- {name} -- {username}
            <input type={"button"} value={'INFO'} onClick={click}/>
        </div>
    );
};

export default User;