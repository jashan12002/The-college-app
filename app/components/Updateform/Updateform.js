import React from 'react'
import { useState } from 'react';

const Updateform = ({ studentDetails,handleUpdateStudent }) => {
    const [updatedStudentDetails, setUpdatedStudentDetails] = useState(studentDetails);
  return (
    <>
    {/* Form to edit student details */}
    <input
      type="text"
      value={updatedStudentDetails.name}
      onChange={(e) =>
        setUpdatedStudentDetails({ ...updatedStudentDetails, name: e.target.value })
      }
    />
    <input
      type="text"
      value={updatedStudentDetails.roll_no}
      onChange={(e) =>
        setUpdatedStudentDetails({ ...updatedStudentDetails, roll_no: e.target.value })
      }
    />
    
    <button onClick={handleUpdateStudent}>Update Student Details</button>
  </>
  )
}

export default Updateform