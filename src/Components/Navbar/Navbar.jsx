import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div >

            <nav >
                <Link to={'/home'} className="mr-5">Home</Link>
                <Link to={'/contact'} className="mr-5">Contact us</Link>
                <Link to={'/blog'} className="mr-5">Our Blog</Link>
                <Link to={'/FAQ'} className="mr-5">FAQ</Link>
            </nav>



            <Outlet />
        </div>
    );
};

export default Navbar;