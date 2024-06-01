import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id,userid,title,body}=post;
    return (
        <div className="container mx-auto pt-10">
           <h1>This post is from <span className="font-bold">{userid}</span> with the title of <span className="font-bold">{title}</span></h1>
           <p>main post <span className="font-bold">{body}</span></p>
        </div>
    );
};

export default PostDetails;