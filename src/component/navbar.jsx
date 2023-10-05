import { Outlet, Link } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
    return(
        <>
            <div className="header">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>                <div className="navbar">
                <ul className="">
                    <li><Link to="/"><span>00</span> Home</Link></li>
                    <li><Link to="/destination"><span>01</span> Destination</Link></li>
                    <li><Link to="/crew"><span>02</span> Crew</Link></li>
                    <li><Link to="/technology"><span>03</span> Technology</Link></li>
                </ul>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;