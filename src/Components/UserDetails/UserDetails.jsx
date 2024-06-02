import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
   const user = useLoaderData();
   const navigate = useNavigate();
   const {userId}=useParams();
   console.log(userId);
   

   const handleGoBack=()=>{
    navigate(-1);
   }
   const {name,id} = user ;
    return (
        <div className="text-center text-3xl">
            <h4>details user : id {id}</h4>
            <h4>user name : {name}</h4>
            <button className="bg-red-500 rounded-lg p-2" onClick={handleGoBack}>GO Back</button>
        </div>
    );
};

export default UserDetails;