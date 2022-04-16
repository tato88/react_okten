
const UserInfo = ({user}) => {
    return (
        <div>
            {user.name} -- {user.phone} -- {user.email}
        </div>
    );
};

export default UserInfo;