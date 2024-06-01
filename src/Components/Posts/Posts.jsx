import { useLoaderData } from "react-router-dom";
import Post from '../Post/Post';


const Posts = () => {
    const posts = useLoaderData();

    return (
        <div className="text-2xl container mx-auto">
            <h4>number of posts:{posts.length}</h4>
            <div className="grid grid-cols-5 gap-5">
            {
                posts.map(post => <Post post={post}></Post>)
            }
            </div>
            

        </div>
    );
};

export default Posts;