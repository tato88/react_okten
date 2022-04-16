import React, {useState} from 'react';
import Users from "./components/Users/Users";
import UserInfo from "./components/UserInfo/UserInfo";

import './App.css';

import Posts from "./components/Posts/Posts";

const App = () => {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)

    return (
        <div>
            <div className={'user_userInfo'}>
                <Users setUser={setUser}/>
                {user && <UserInfo user={user} setUserId={setUserId}/>}}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export default App;
