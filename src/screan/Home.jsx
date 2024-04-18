import React, { useState } from 'react';
import Dashboard from '../Home-pages/Dashboard';
import Sidebar from '../Home-pages/Sidebar';
import Footer from '../welcome-pages/Footer';

const Home = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <div>
        <div className='flex'>
            <Sidebar sidebarToggle={sidebarToggle}/>
            <Dashboard 
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
            
        </div>
       
        </div>
    );
}

export default Home;
