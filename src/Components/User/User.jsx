

const User = ({user}) => {
    const {id,name,email,username,address,phone} =user;
    return (
        <div className="bg-slate-400 border-2 rounded-lg p-4"> 
           
            <h1>{username}</h1>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            
            <h1>{address.street}</h1>
        </div>
    );
};

export default User;