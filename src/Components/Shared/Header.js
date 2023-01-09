import React from 'react';
import { NavLink } from 'react-router-dom';
import topBar from "../../Assets/Images/bg-sidebar-mobile.svg";

const Header = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            // textDecoration: isActive ? 'underline' : 'none',
            backgroundColor: isActive ? "#BCE2FD" : "transparent",
            color: isActive ? "#002657" : ""
        }
    }

    return (
        <div className="flex flex-col w-full bg-white bg-cover text-white h-40" style={{ backgroundImage: `url(${topBar})` }}>
            <ul className="flex justify-center gap-x-4 mt-10">
                <li>
                    <NavLink to="/" style={navLinkStyle} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
                        <span>1</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/plan" style={navLinkStyle} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
                        <span>2</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-ons" style={navLinkStyle} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
                        <span>3</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/summary" style={navLinkStyle} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
                        <span>4</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;