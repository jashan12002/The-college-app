"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { FaHouseUser, FaImage, FaBell, FaInstagram,FaFacebook, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";


const Footer = () => {
    return (
        <div className='rounded-3xl bg-[#DAD4EF] px-10 py-5 flex justify-around drop-shadow-xl flex-wrap z-0 gap-4 dark:bg-[#101015] dark:text-[#f5f5f5]'>
            <div className="navigations text-center w-44 ">

                <h2 className='text-2xl border-b-2 border-black dark:border-[#7c7f82] pb-3 font-extrabold'>Navigation</h2>
                <div className='gap-2 flex flex-col items-center py-2'>
                    <Link href="/" className='flex'><p>Home</p><p className='text-[23px] ml-1'><FaHouseUser /></p></Link>
                    <Link href="/gallary" className='flex'><p>Gallary</p>  <p className='text-[23px] ml-1'><FaImage /></p></Link>
                    <Link href="/updates" className='flex'><p>Updates</p> <p className='text-[23px] ml-1'><FaBell /></p></Link>
                    <Link href="/" className='flex'><p>Teacher Login</p><p className='text-[23px] ml-1'><RiAdminFill /></p></Link>
                    <Link href="/" className='flex'><p>Student Login</p><p className='text-[23px] ml-1'><PiStudentFill /></p></Link>
                </div>
            </div>
            <div className="navigations text-center w-44 ">
                <h2 className='text-2xl border-b-2 border-black pb-3 font-extrabold dark:border-[#7c7f82]'>Social Media</h2>
                <div className='gap-2 flex flex-col items-center py-2'>
                    <Link href="/" className='flex'><p>Instagram</p><p className='text-[23px] ml-1'><FaInstagram className='text-pink-800' /></p></Link>
                    <Link href="/gallary" className='flex'><p>facebook</p>  <p className='text-[23px] ml-1'><FaFacebook className='text-sky-800' /></p></Link>
                    <Link href="/updates" className='flex'><p>Twitter</p> <p className='text-[23px] ml-1'><FaXTwitter /></p></Link>
                   
                </div>
            </div>
            <div className="navigations text-center w-48 ">
                <h2 className='text-2xl border-b-2 border-black pb-3 font-extrabold dark:border-[#7c7f82]'>Offical Website</h2>
                <div className='gap-2 flex flex-col items-center py-2'>
                    <Link href="/" className='flex'><p>www.shahsatnamjieducations.com</p><p className='text-[23px] ml-1'><FaGlobe /></p></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer