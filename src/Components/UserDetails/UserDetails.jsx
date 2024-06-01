import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
   const user = useLoaderData();
   const {name} = user ;
    return (
        <div className="text-center text-3xl">
            <h4>details user : name {name}</h4>
        </div>
    );
};

export default UserDetails;