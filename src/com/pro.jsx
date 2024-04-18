import React from 'react';
import th from '../assets/3.jpg';

const Pro = () => {
  return (
    <div className=" bg-[#020917] text-white flex flex-col items-center justify-center mt-8 mr-20 ">
      {/* Profile picture */}
      <img src={th} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
      {/* Profile name */}
      <h5 className="text-3xl font-bold leading-none dark:text-white pt-5">Temesgen Moges</h5>
      {/* Balance */}
      <p className="text-xl pt-6 font-medium  dark:text-white pb-5">Balance = 200 birr</p>
      {/* Buttons */}
      <div className="mt-4">
        <button className="px-4 py-2 mr-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Balance</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Withdraw Balance</button>
      </div>
    </div>
  );
};

export default Pro;
