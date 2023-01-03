import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar';

const MainLayouts = () => {
    return (
        <div className='bg-white rounded-2xl p-4 mt-20 flex'>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default MainLayouts;