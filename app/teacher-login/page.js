"use client"
import React, { useState, useEffect } from 'react';
import { account } from '@/app/appwrite';
import AdminLoginPage from '@/app/components/AdminLoginPage/AdminLoginPage';
import AdminNavbar from '@/app/components/AdminNavbar/AdminNavbar';
import { useRouter } from 'next/navigation';

export let loggedInUser = null;

const TeacherLogin = () => {
    const [user, setUser] = useState(null);
    const [TeacherID, setTeacherID] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Delete any existing session when the page is loaded
        const deleteExistingSession = async () => {
            try {
                const session = await account.getSession('current');
                if (session) {
                    await account.deleteSession('current');
                }
            } catch (error) {
                console.error(error);
            }
        };

        deleteExistingSession();
    }, []);

    const handleLogin = async (TeacherID, password) => {
        try {
            setLoggingIn(true);
            setErrorMessage('');

            // Create a new session
            await account.createEmailSession(TeacherID, password);
            setUser(await account.get());
            loggedInUser = await account.get();
            setLoggingIn(false);
        } catch (error) {
            console.error(error);
            setErrorMessage('Email or password is wrong or check your internet connection');
            setLoggingIn(false);
        }
    };

    const handleLogout = async () => {
        await account.deleteSession("current");
        setUser(null);
        loggedInUser = null;
        router.push('/teacher-login');
    };


    if (user) {
        return (
            <div>
                <AdminLoginPage handleLogout={handleLogout} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white dark:bg-[#1f2937] rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-[#e5e7eb]">Teacher Login</h2>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                <form className="flex flex-col">
                    <input value={TeacherID} onChange={(e) => setTeacherID(e.target.value)} type="email" className="bg-gray-200 dark:bg-[#374151] text-gray-900 dark:text-[#9ca3af] border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Teacher ID" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 dark:bg-[#374151] text-gray-900 dark:text-[#9ca3af] border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />
                    <button
                        onClick={() => handleLogin(TeacherID, password)}
                        type="button"
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                        disabled={loggingIn}
                    >
                        {loggingIn ? 'Logging In...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TeacherLogin;
