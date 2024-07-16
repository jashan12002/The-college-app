// AdminLoginPage.js

import React from 'react';
import AdminNavbar from '@/app/components/AdminNavbar/AdminNavbar'; // Update the import path


const AdminLoginPage = ({ handleLogout }) => {
    return (
        <div className='md:flex w-full gap-5'>
            <AdminNavbar handleLogout={handleLogout} /> {/* Pass handleLogout as a prop */}
            <div className=''>
                Welcome to Teacher login page
            </div>
        </div>
    );
};

export default AdminLoginPage;
