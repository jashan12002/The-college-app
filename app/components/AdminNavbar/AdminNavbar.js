"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { IoMdLogOut } from "react-icons/io";
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const AdminNavbar = ({ handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative ">
            <div className={`sidenavbar md:h-96 h-24 overflow-hidden my-2 rounded-3xl  bg-[#dad4ef] dark:bg-[#14131b] dark:text-[#f5f5f5] px-16 py-4  flex md:w-[265px] w-full transition-height  duration-500 ${isOpen ? 'h-72' : 'h-16'}`}>
                
                <div className="menu h-fit mx-auto translate-y-[55px] md:translate-y-0 flex flex-col items-center bg-[#dad4ef] dark:bg-[#14131b] dark:text-[#f5f5f5] ">
                    <div className="flex flex-col">
                        <ul className="md:flex gap-3 md:flex-col items-center">
                            <li className="bg-indigo-500 px-4  py-2 rounded-full mb-4 md:mb-0 hover:bg-indigo-600 transition-all shadow-2xl hover:scale-[1.02] md:w-fit w-[20rem]">
                                <Link className='w-80' href={"/teacher-login/create-data"}>Create Student Data</Link>
                            </li>
                            <li className="bg-indigo-500 px-4 py-2 rounded-full hover:bg-indigo-600 transition-all shadow-2xl hover:scale-[1.02]">
                                <Link href={"/teacher-login/update-data"}>Update Student Data</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="logout mt-3">
                        <button
                            type="button"
                            className="bg-red-500 py-2 rounded-full hover:bg-red-600 transition-all shadow-2xl hover:scale-[1.02] px-7 flex gap-1 items-center"
                            onClick={handleLogout}
                        >
                            Logout <IoMdLogOut className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="hamburger ml-[25px]  mt-1 my-auto absolute top-4 left-4  cursor-pointer transition-transform duration-500"
                onClick={toggleSidebar}
            >
                {isOpen ? (
                    <RxCross1 className="text-2xl  hover:text-gray-600 md:hidden" />
                ) : (
                    <RxHamburgerMenu className="text-2xl  hover:text-gray-600 md:hidden" />
                )}
            </div>
        </div>
    );
};

export default AdminNavbar;