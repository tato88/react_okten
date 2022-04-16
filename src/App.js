import React, {useState} from 'react';
import Users from "./components/Users/Users";
import UserInfo from "./components/UserInfo/UserInfo";

import './App.css';

const App = () => {
    const [user,setUser] = useState([])
    return (
        <div>
            <div className={'user_userInfo'}>
                <Users setUser={setUser}/>
                {user && <UserInfo user={user}/>}
            </div>
        </div>
    );
};

export default App;
