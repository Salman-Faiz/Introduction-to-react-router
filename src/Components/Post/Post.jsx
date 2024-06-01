import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, userId, title, body } = post;
    // console.log(post);
    return (
        <div className="bg-slate-400 rounded-lg p-3 flex flex-col">
           
           <div className="flex-grow">
           <h4><span className="text-2xl font-semibold">User Id</span> {userId} </h4>
            <h4><span className="text-2xl font-semibold ">Post title</span> {title} </h4>
           </div>
            <Link to={`/post/${id}`}><button className="bg-green-300 w-full rounded-lg">see details</button></Link>
        </div>
    );
};

export default Post;