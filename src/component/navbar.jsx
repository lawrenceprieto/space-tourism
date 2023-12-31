import { Outlet, Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

function NavBar() {

    const [activeIndex, setActiveIndex] = useState(0);
    const navs = [
        { name: "Home", path: "/" },
        { name: "Destination", path: "/destination" },
        { name: "Crew", path: "/crew" },
        { name: "Technology", path: "/technology" },
    ]; 

    function handleNav(index) {
        setActiveIndex(index);
    }
    // console.log(index);
    return(
        <>
            <div className="header">
                <svg xmlns="http://www.w3.org/2000/svg" className="dest-logo" width="50" height="50"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                <div className="navbar tab-desk">
                    <ul>
                        {
                            navs.map((nav,index) => (
                                <li key={index}>
                                    <Link to={nav.path} className={index === activeIndex ? "active-navbar" : null} 
                                        onClick={() => handleNav(index)} ><span className="nav-num">0{index}</span> {nav.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mob">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvasExample" style={{color: "#D0D6F9"}}>
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <div style={{width: "300px"}}className="offcanvas offcanvas-end mob" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="navbar">
                            <ul>
                                <li><Link to="/"><span className="nav-num">00</span> Home</Link></li>
                                <li><Link to="/destination"><span className="nav-num">01</span> Destination</Link></li>
                                <li><Link to="/crew"><span className="nav-num">02</span> Crew</Link></li>
                                <li><Link to="/technology"><span className="nav-num">03</span> Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;