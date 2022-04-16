import React, {useEffect, useState} from 'react';

const UserInfo = ({infoId}) => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+ infoId)
            .then(value => value.json())
            .then(value => setUserInfo(value))
    }, [])
    return (
        <div>
            {userInfo.name} -- {userInfo.phone}
        </div>
    );
};

export default UserInfo;