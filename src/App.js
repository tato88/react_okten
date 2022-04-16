import React, {useState} from 'react';
import Users from "./components/Users/Users";
import UserInfo from "./components/UserInfo/UserInfo";

import './App.css';

const App = () => {
    const [infoId,setInfoId] = useState(null)
    return (
        <div>
            <div className={'user_userInfo'}>
                <Users setInfoId={setInfoId}/>
                {infoId && <UserInfo infoId={infoId}/>}
            </div>
        </div>
    );
};

export default App;
