import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Sidebar from '../Shared/Sidebar';

const MainLayouts = () => {
    return (
        <div className='bg-white lg:rounded-2xl lg:p-4 lg:mt-20 lg:flex'>
            <div className='hidden lg:block'>
                <Sidebar />
            </div>
            <div className='lg:hidden'>
                <Header />
            </div>
            <div className='mx-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayouts;