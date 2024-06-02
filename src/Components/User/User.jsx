import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,username,address,phone} =user;
    const navigate= useNavigate();
    
    const handleDetails =()=>{
        navigate(`/users/${id}`);
    }
    return (
        <div className="bg-slate-400 border-2 rounded-lg p-4"> 
           
            <h1>{username}</h1>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <h1>{address.street}</h1>
            <Link to={`/users/${id}`}><button className="bg-blue-500 text-2xl w-full rounded-lg">show details</button></Link>
            <button className="bg-green-600 w-full mt-4 rounded-md" onClick={handleDetails} >onClick btn</button>
        </div>
    );
};

export default User;