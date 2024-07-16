"use client"
import { useState } from 'react';
import { databases } from '@/app/appwrite';
import { Client, Databases } from "appwrite";
import { Toaster, toast } from 'react-hot-toast';


const UpdateDetailform = ({ studentDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedStudentDetails, setUpdatedStudentDetails] = useState(studentDetails);

  const handleUpdateStudent = async () => {
    try {
        const updatedData = {
            ...(updatedStudentDetails.name && { name: updatedStudentDetails.name }), // Include name only if it's not empty
            ...(updatedStudentDetails.roll_no !== undefined && { roll_no: Number(updatedStudentDetails.roll_no) }),
            ...(updatedStudentDetails.attendance !== undefined && { attendance:updatedStudentDetails.attendance }),
          };
          const documentId = studentDetails.documentId; // Access the document ID
 
      const response = await databases.updateDocument(
        '65fdab00531d6da4a568',
        '66193b727ebc89771f71',
        documentId,
        updatedData
      );
      console.log('Student details updated successfully:', response);
      setIsEditing(false); // Reset the editing state after successful update
      toast.success('Data updated successfully!', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    } catch (error) {
      console.error('Error updating student details:', error);
      toast.error('Error updating data. Please try again.', {
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
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <Toaster />
      {/* Display existing student details */}
      <p>Name: {studentDetails.name}</p>
      <p>Roll Number: {studentDetails.roll_no}</p>
      <p>Attendance: {studentDetails.attendance}</p>
    
      {/* Add other student details fields */}

      {isEditing ? (
        <>
          {/* Form to edit student details */}
          <input
            type="text"
            className='text-black'
            value={updatedStudentDetails.name}
            onChange={(e) =>
              setUpdatedStudentDetails({ ...updatedStudentDetails, name: e.target.value })
            }
          />
          <br />
          <input
            type="number"
            className='text-black'
            value={updatedStudentDetails.roll_no || ''}
            onChange={(e) =>
                setUpdatedStudentDetails({
                    ...updatedStudentDetails,
                    roll_no: e.target.value ? Number(e.target.value) : undefined, // Convert to number or set to undefined for empty input
                  })
            }
          />
          <input
            type="number"
            className='text-black'
            value={updatedStudentDetails.attendance || ''}
            onChange={(e) =>
                setUpdatedStudentDetails({
                    ...updatedStudentDetails,
                    attendance: e.target.value ? Number(e.target.value) : undefined, // Convert to number or set to undefined for empty input
                  })
            }
          />
          {/* Add similar inputs for other fields */}
          <button onClick={handleUpdateStudent}>Update Student Details</button>
        </>
      ) : (
        <button onClick={handleEditClick}>Edit Student Details</button>
      )}
    </div>
  );
};

export default UpdateDetailform;