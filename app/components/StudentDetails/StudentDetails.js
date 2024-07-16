import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import userimg from '@/public/Profile/image2.png'


const StudentDetails = ({ studentDetails }) => {

  const totalClasses = 300;
  const ClassAttended = studentDetails.attendance;

  let AttendencePrcentage;
  let progress;

  // Handle null or undefined case outside the component function
  if (ClassAttended === null || ClassAttended === undefined) {
    AttendencePrcentage = 0;
    progress = 0;
  } else {
    AttendencePrcentage = Math.round((ClassAttended / totalClasses) * 100);
    const [progressState, setProgressState] = useState(0);
    progress = progressState;

    useEffect(() => {
      let progressStartValue = 0;
      const progressEndValue = AttendencePrcentage;
      const speed = 60;
      const interval = setInterval(() => {
        progressStartValue++;
        setProgressState(progressStartValue);
        if (progressStartValue === progressEndValue) {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, [AttendencePrcentage]);
  }

  // Function to capitalize the first letter of the name
  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div>

      <div className='bg-[#dad4ef] dark:bg-[#14131b] my-4 rounded-3xl px-8 py-5 gap-8 drop-shadow-md'>
        <div className='py-3 flex gap-1 items-center'>
          <div className='border-glow border-r-4  border-[#8962f7] h-6 rounded-lg mb-[4px]'></div>
          <div className='text-xl text-[#00296b] mb-1 font-bold dark:text-gray-400 text-glow'>Profile</div>
        </div>

        <div className=' flex flex-col md:flex-row justify-center items-center md:justify-between'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
            <div
              className="profile bg-gradient-to-br from-purple-500 to-blue-500 h-60 w-60 rounded-full overflow-hidden"
            >
              <Image
                src={userimg} // Path to the image file in the public folder
                alt="User Profile"
                width={240} // Desired width
                height={240} // Desired height
                className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'
              />
            </div>

            <div>
              <p className='dark:text-gray-400 text-[#00296bc4]'>Name</p>
              <p className='mb-3 font-extrabold text-2xl text-[#00296b] dark:text-white'>{capitalizeFirstLetter(studentDetails.name)} <span className='text-base font-thin'>{studentDetails.is_CR && (<span>(CR)</span>)}</span></p>
              <p className='dark:text-gray-400 text-[#00296bc4] '>Roll Number</p>
              <p className='text-xl mb-3 font-extrabold text-[#00296b] dark:text-white'>{studentDetails.roll_no}</p>
              <p className='dark:text-gray-400 text-[#00296bc4]'>Departement</p>
              <p className='text-xl font-extrabold text-[#00296b] dark:text-white'>{studentDetails.department}</p>
            </div>
          </div>
          <div>
            <div className="circular-progress relative h-[250px] w-[250px] rounded-[50%] flex items-center justify-center before:dark:bg-[#14131b]"
              style={{ background: `conic-gradient(#965cf6 ${progress * 3.6}deg, #183153 ${progress * 3.6}deg)` }}
            >
              <div className='flex flex-col items-center'>
                <span className='progressValue relative font-bold text-5xl text-[#00296b] dark:text-white'>{progress}%</span>
                <span className='relative dark:text-white text-[#00296b]'>Attendance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default StudentDetails
