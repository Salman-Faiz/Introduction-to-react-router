import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div >

            <nav className="text-center text-2xl text-blue-600 pt-5">
                <Link to={'/home'} className="mr-5">Home</Link>
                <Link to={'/contact'} className="mr-5">Contact us</Link>
                <Link to={'/posts'} className="mr-5">Posts</Link>
                <Link to={'/users'} className="mr-5">Users</Link>
                <Link to={'/FAQ'} className="mr-5">FAQ</Link>
            </nav>



           
        </div>
    );
};

export default Navbar;