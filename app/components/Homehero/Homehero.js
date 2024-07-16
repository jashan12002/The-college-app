import React from 'react'
    // import teacher from '@/public/Mathematics-pana.png'
    import teacher2 from '@/public/Mathematics-bro.png'
    // import teacherProfile1 from '@/public/profile/image.png'
    // import teacherProfile2 from '@/public/Mathematics-pana-white.png'
    // import teacherProfile3 from '@/public/Mathematics-pana-white.png'
    // import teacherProfile4 from '@/public/Mathematics-pana-white.png'
    import Image from 'next/image'
    const Homehero = () => {
        return (
            <div>
                <div className=' flex justify-between items-center h-[30rem] mt-3 rounded-xl bg-[#DAD4EF]  dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[size:14px_24px] dark:bg-[#101015] p-3 dark:text-[#f5f5f5]'>
                    <div className='flex flex-col justify-center h-full ' >
                        <span className='text-7xl font-bold z-10 text-[#00296b] dark:text-[#ffffff]'>OUR TEACHERS</span>
                        <div className='flex justify-center w-[35rem] gap-2 '>
                            <div className='rounded-full w-20 h-20  Heroprofile dark:border dark:border-white dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-2xl shadow-blue-500/20'></div>
                            <div className='rounded-full w-20 h-20 Heroprofile2  dark:border-white dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-2xl shadow-blue-500/20'></div>
                            <div className='rounded-full w-20 h-20 Heroprofile3  dark:border-white dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-2xl shadow-blue-500/20'></div>
                            <div className='rounded-full w-20 h-20 Heroprofile4   dark:border-white dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-2xl shadow-blue-500/20'></div>
                        </div>
                    </div>
                    <div className=''><Image src={teacher2} width={550} height={550} /></div>
                    
                </div>
            </div>
        )
    }

    export default Homehero