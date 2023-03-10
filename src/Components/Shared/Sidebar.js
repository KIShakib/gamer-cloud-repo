import React from 'react';
import { NavLink } from 'react-router-dom';
import sidebarBg from "../../Assets/Images/bg-sidebar-desktop.svg";

const Sidebar = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            // textDecoration: isActive ? 'underline' : 'none',
            backgroundColor: isActive ? "#BCE2FD" : "transparent",
            color: isActive ? "#002657" : ""
        }
    }

    return (
        <div className="flex flex-col w-64 bg-white rounded-xl bg-cover text-white h-[550px] mr-32" style={{ backgroundImage: `url(${sidebarBg})` }}>
            <ul className="flex flex-col py-8 gap-y-5">
                <li>
                    <NavLink to="/">
                        <div className='flex items-center gap-x-4 ml-8'>
                            <NavLink to="/" style={navLinkStyle} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
                                <span>1</span>
                            </NavLink>
                            <div>
                                <span className='text-xs tracking-wider'>STEP 1</span>
                                <p className='text-sm font-bold tracking-widest'>YOUR INFO</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/plan">
                        <div className='flex items-center gap-x-4 ml-8'>
                            <NavLink to="/plan" style={navLinkStyle} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
                                <span>2</span>
                            </NavLink>
                            <div>
                                <span className='text-xs tracking-wider'>STEP 2</span>
                                <p className='text-sm font-bold tracking-widest'>SELECT PLAN</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-ons">
                        <div className='flex items-center gap-x-4 ml-8'>
                            <NavLink to="/add-ons" style={navLinkStyle} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
                                <span>1</span>
                            </NavLink>
                            <div>
                                <span className='text-xs tracking-wider'>STEP 3</span>
                                <p className='text-sm font-bold tracking-widest'>ADD-ONS</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/summary">
                        <div className='flex items-center gap-x-4 ml-8'>
                            <NavLink to="/summary" style={navLinkStyle} className='w-8 h-8 rounded-full border-2 flex justify-center items-center'>
                                <span>1</span>
                            </NavLink>
                            <div>
                                <span className='text-xs tracking-wider'>STEP 4</span>
                                <p className='text-sm font-bold tracking-widest'>SUMMARY</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;