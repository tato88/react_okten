const UserInfo = ({user, setUserId}) => {
    const {name, phone, email} = user
    return (
        <div>
            <div>
                <div>name: {name}</div>
                <div>phone: {phone}</div>
                <div>email: {email}</div>
            </div>
            <input type={"button"} value={'show posts'} onClick={() => setUserId(user.id)}/>
        </div>
    );
};

export default UserInfo;