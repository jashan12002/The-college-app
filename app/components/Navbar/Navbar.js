"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { FaHouseUser, FaImage, FaBell } from 'react-icons/fa';
import ThemeToogle from '../ThemeToogle/ThemeToogle';
import { RiAdminFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="flex bg-[#DAD4EF] dark:bg-[#14131b] dark:text-[#f5f5f5] px-10 py-4 rounded-full m-auto justify-between items-center drop-shadow-md z-40">
                <div className="text-2xl relative md:hidden">
                    {isOpen ? (
                        <RxCross1 onClick={toggleMenu} className="cursor-pointer" />
                    ) : (
                        <RxHamburgerMenu onClick={toggleMenu} className="cursor-pointer transform transition-transform duration-300 hover:scale-110" />
                    )}
                </div>
                <div className="md:flex hidden md:gap-10">
                    <Link href="/" className="flex transition-colors duration-300 hover:text-indigo-500">
                        <p>Home</p>
                        <p className="text-[23px] ml-1">
                            <FaHouseUser />
                        </p>
                    </Link>
                    <Link href="/gallary" className="flex transition-colors duration-300 hover:text-indigo-500">
                        <p>Gallary</p>
                        <p className="text-[23px] ml-1">
                            <FaImage />
                        </p>
                    </Link>
                    <Link href="/updates" className="flex transition-colors duration-300 hover:text-indigo-500">
                        <p>Updates</p>
                        <p className="text-[23px] ml-1">
                            <FaBell />
                        </p>
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <ThemeToogle />
                    <ul className="md:flex gap-7 hidden">
                        <li className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <Link href="/student-login-form" className="flex items-center gap-1">
                                Student login <PiStudentFill className="text-[1.3rem]" />
                            </Link>
                        </li>
                        <li className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <Link href="/teacher-login" className="flex items-center gap-1">
                                Teacher login <RiAdminFill className="text-[1.3rem]" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                className={`md:hidden dark:bg-[] dark:text-[#f5f5f5] backdrop-blur-md ${
                    isOpen
                        ? 'absolute translate-x-[0rem] bg-color top-2 left-2 h-screen w-[60%] drop-shadow-2xl rounded-3xl z-10 p-4 transform transition-transform duration-500'
                        : 'hidden'
                } md:gap-10`}
            >
                <RxCross1 onClick={toggleMenu} className="cursor-pointer text-2xl ml-[30px] mt-[9px]" />
                <div className="flex flex-col items-center gap-3 justify-center h-full">
                    <Link href="/" className="flex transition-colors duration-300 hover:text-indigo-500">
                        <p onClick={toggleMenu}>Home</p>
                        <p className="text-[23px] ml-1">
                            <FaHouseUser />
                        </p>
                    </Link>
                    <Link href="/gallary" className="flex transition-colors duration-300 hover:text-indigo-500">
                        <p onClick={toggleMenu}>Gallary</p>
                        <p className="text-[23px] ml-1">
                            <FaImage />
                        </p>
                    </Link>
                    <Link href="/updates" className="flex transition-colors duration-300 hover:text-indigo-500">
                        <p onClick={toggleMenu}>Updates</p>
                        <p className="text-[23px] ml-1">
                            <FaBell />
                        </p>
                    </Link>
                    <li className="bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-400  list-none mt-11 transform transition-transform duration-300 hover:scale-105">
                        <Link onClick={toggleMenu} href="/student-login-form" className="flex items-center gap-1">
                            Student login <PiStudentFill className="text-[1.3rem]" />
                        </Link>
                    </li>
                    <li className="bg-blue-300 px-4 py-2 rounded-full hover:bg-blue-400  list-none transform transition-transform duration-300 hover:scale-105">
                        <Link onClick={toggleMenu} href="/teacher-login" className="flex items-center gap-1">
                            Teacher login <RiAdminFill className="text-[1.3rem]" />
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Navbar;