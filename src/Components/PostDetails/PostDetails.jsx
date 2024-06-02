import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id,userid,title,body}=post;
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div className="container mx-auto pt-10">
           <h1>This post is from <span className="font-bold">{userid}</span> with the title of <span className="font-bold">{title}</span></h1>
           <p>main post <span className="font-bold">{body}</span></p>
           <button className="bg-red-500 rounded-lg p-2" onClick={handleGoBack}>GO Back</button>

        </div>
    );
};

export default PostDetails;