import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import teacher from '@/public/Teacher.png'
import student from '@/public/Student.png'

const TeacherandStudent = () => {
    return (
        <div className=' flex gap-10 justify-center '>
            <div className=' border bg-[#dad4ef] border-blue-400 dark:border-gray-500 w-fit rounded-lg dark:bg-[#14131b] hover:dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] px-10 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>

                <div className='flex'>
                    <Image src={teacher} width={400} height={400} className='z-10 ml-[-70px]' />
                    <div className=" flex flex-col justify-center items-center gap-1 text-5xl font-bold ml-[-180px] text-[#00296b] dark:text-[#ffffff]">
                        Teacher login
                        <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <Link href="/teacher-login" className="flex items-center gap-1 ">
                                Teacher login
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' border bg-[#dad4ef] border-blue-400 dark:border-gray-500 w-fit rounded-lg dark:bg-[#14131b] hover:dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] px-10 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>

                <div className='flex'>
                    <Image src={student} width={400} height={400} className='z-10 ml-[-70px] mb-[-40px] mt-[40px]' />
                    <div className=" flex flex-col justify-center items-center gap-1 text-5xl font-bold ml-[-120px] text-[#00296b] dark:text-[#ffffff] ">
                        Student login
                        <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <Link href="/student-login-form" className="flex items-center gap-1">
                                Student login
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TeacherandStudent
