import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentStat = () => {
  const data = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5','Semester 6'],
    datasets: [
      {
        label: 'Scores',
        data: [85, 92, 78, 88, 76,60],
        backgroundColor: 'rgba(148, 93, 247, 0.8)', // Bar fill color
        borderColor: 'rgba(148, 93, 247, 1)', // Bar border color
        borderWidth: 0.5, // Border width
        hoverBackgroundColor: 'rgba(148, 93, 247, 1)', // Bar fill color on hover
        hoverBorderColor: 'rgba(148, 93, 247, 1)', // Bar border color on hover
        hoverBorderWidth: 2, // Border width on hover
        barThickness: 30, // Bar thickness
        maxBarThickness: 40, // Maximum bar thickness
        minBarLength: 2, // Minimum bar length
        borderSkipped: 'bottom', // Skip bottom border
        barPercentage: 0.98, // Bar percentage of the available width
        categoryPercentage: 0.98, // Category percentage of the available width
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Student Scores',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='bg-[#dad4ef] dark:bg-[#14131b] my-4 rounded-3xl px-8 py-5 gap-8 drop-shadow-md'>
      <div className='py-3 flex gap-1 items-center'>
        <div className='border-glow border-r-4 border-[#8962f7] h-6 rounded-lg mb-[4px]'></div>
        <div className='text-xl text-[#00296b] mb-1 font-bold dark:text-gray-400 text-glow'>Student Statistics</div>
      </div>
      
      <div className='py-3 flex gap-1 items-center ml-5'>
        <div className=' border-r-4 border-[#8962f7] h-6 rounded-lg mb-[4px]'></div>
        <div className='text-md text-[#00296b] mb-1 font-bold dark:text-gray-400 '>Student Result</div>
      </div>
        <Bar data={data} options={options} />
       
      
    </div>
  );
};

export default StudentStat;
