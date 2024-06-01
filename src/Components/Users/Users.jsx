import User from '../User/User';
import { Link, useLoaderData } from "react-router-dom";
const Users = () => {
    const users = useLoaderData();
    return (
        
        <div className='container mx-auto' >
             <h4>Number of User list of our company  {users.length}</h4>
             <div className='md:grid grid-cols-4 gap-4'>
                {
                users.map(user => <User user={user}></User>)
            }
         
             </div>
            
        </div>
    );
};

export default Users;