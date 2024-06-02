import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div >

            <nav className={`text-center text-2xl text-blue-600 pt-5 `}>
       
                
                <NavLink to={'/home'} className="mr-5">Home</NavLink>
                <NavLink to={'/contact'} className="mr-5">Contact</NavLink>
                <NavLink to={'/posts'} className="mr-5">Posts</NavLink>
                <NavLink to={'/users'} className="mr-5">Users</NavLink>
                <NavLink to={'/FAQ'} className="mr-5">FAQ</NavLink>
                
        
            </nav>



           
        </div>
    );
};

export default Navbar;