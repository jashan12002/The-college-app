"use client"
import StudentDetails from '../components/StudentDetails/StudentDetails';
import React, { useState, useEffect } from 'react';
import { Client, Databases, Query } from "appwrite";
import { Toaster, toast } from 'react-hot-toast';
import StudentStat from '../components/StudentStat/StudentStat';


const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65f535a863b003b139f7")
const databases = new Databases(client);

const databaseId = '65fdab00531d6da4a568';
const collectionId = '66193b727ebc89771f71';

const StudentLogin = () => {
    const [studentDetails, setStudentDetails] = useState(null);
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleRollNumberChange = (event) => {
        setRollNumber(parseInt(event.target.value));
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoggingIn(true);

        try {
            const response = await searchStudent(name, rollNumber);
            setStudentDetails(response);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoggingIn(false);
        }
    };

    const searchStudent = async (name, rollNumber) => {
        const promise = databases.listDocuments(
            databaseId,
            collectionId,
            [
                Query.equal('roll_no', rollNumber),
                Query.equal('name', name)
            ]
        );

        const response = await promise;
        const documents = response.documents;

        if (documents.length > 0) {
            return documents[0]; // Assuming there's only one match
        } else {
            toast.error('No student found with provided details', {
                style: {
                    border: '1px solid #991b1b',
                    padding: '16px',
                    color: '#991b1b',
                },
                iconTheme: {
                    primary: '#991b1b',
                    secondary: '#FEE2E2',
                },
            });
            return null;
        }
    };

    if (studentDetails) {
        return (
            <>
            <StudentDetails studentDetails={studentDetails} />
            <StudentStat />
            </>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
           
            <div className="w-full max-w-md bg-[#f2f1f9] dark:bg-[#14141c] rounded-lg shadow-2xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-[#e5e7eb]">Student Login</h2>
                <form className="flex flex-col" onSubmit={handleLogin}>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="bg-gray-100 dark:bg-[#1d1d27] text-gray-900 dark:text-[#9ca3af] border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        placeholder="Student name"
                    />
                    <input
                        type="text"
                        value={rollNumber}
                        onChange={handleRollNumberChange}
                        className="bg-gray-100 dark:bg-[#1d1d27] text-gray-900 dark:text-[#9ca3af] border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        placeholder="Student Roll no."
                    />
                    <button
                        type="submit"
                        className="text-white text-base bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-7 py-2.5 text-center  mb-2"
                        disabled={isLoggingIn}
                    >
                        {isLoggingIn ? 'Logging in...' : 'Login'}
                    </button>
                </form>

            </div>
            <Toaster />
        </div>
    )
}

export default StudentLogin
