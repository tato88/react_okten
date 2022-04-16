
const UserInfo = ({user}) => {
    return (
        <div>
            {user} -- {user.phone} -- {user.email}
        </div>
    );
};

export default UserInfo;