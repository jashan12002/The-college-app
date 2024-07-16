"use client"
import React, { useEffect, useState } from 'react';
import { loggedInUser } from '@/app/teacher-login/page'; // Import loggedInUser from TeacherLogin
import AdminNavbar from '@/app/components/AdminNavbar/AdminNavbar';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/auth';
import { account, ID } from '@/app/appwrite';
import { Client, Databases, Query } from "appwrite";
import { Toaster, toast } from 'react-hot-toast';
import UpdateDetailform from '@/app/components/UpdateDetailform/UpdateDetailform';

// connecting with appwrite database
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65f535a863b003b139f7")
const databases = new Databases(client);

const databaseId = '65fdab00531d6da4a568';
const collectionId = '66193b727ebc89771f71';

const UpdateData = () => {
  const router = useRouter();

  // Student login form
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
      if (response) {
        setStudentDetails(response);
      }
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
      const studentDocument = documents[0]; // Assuming there's only one match
    const documentId = studentDocument.$id; // Get the document ID

    return { documentId, ...studentDocument }; // Return an object containing the document ID and data
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

  useEffect(() => {
    if (!loggedInUser) {
      router.push('/teacher-login');
    }
  }, [loggedInUser, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/teacher-login');
  };

  return (
    <div className='md:flex w-full mx-auto'>
      <AdminNavbar handleLogout={handleLogout} />
      <div className='p-4 w-full my-auto'>
        <div className="flex flex-col items-center justify-center w-full">
          {studentDetails ? (
            <UpdateDetailform studentDetails={studentDetails} />
          ) : (
            <div className="w-full max-w-md bg-white dark:bg-[#1f2937] rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-[#e5e7eb]">Student Login</h2>
              <form className="flex flex-col" onSubmit={handleLogin}>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="bg-gray-100 dark:bg-[#374151] text-gray-900 dark:text-[#9ca3af] border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Student name"
                />
                <input
                  type="text"
                  value={rollNumber}
                  onChange={handleRollNumberChange}
                  className="bg-gray-100 dark:bg-[#374151] text-gray-900 dark:text-[#9ca3af] border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Student Roll no."
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </button>
              </form>
            </div>
          )}
          <Toaster />
        </div>
      </div>
    </div>
  )
}

export default UpdateData