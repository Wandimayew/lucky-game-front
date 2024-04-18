import React from 'react';
import { useNavigate } from 'react-router-dom';
import catAnimation from '../assets/cat.json';
import Lottie from 'lottie-react';

const Categoryy = () => {
    const navigate = useNavigate();

    const handlePlayButtonClick = (route) => {
        navigate(route);
    };

    return (
        <div className='mb-10'>
            <div className="flex bg-[#020917] items-top ml-20 ">
                <div className="mb-6">
                    <Lottie animationData={catAnimation} style={{ width: '150px', height: '150px' }} />
                </div>
                <div className='pt-10'>
                    <h2 className="text-3xl text-white font-bold">Choose Category</h2>
                    <p className="text-gray-600 text-lg">Select a category from the options below.</p>
                </div>
            </div>
            <div className='pl-20'>
                <div className="flex justify-between mx-20 space-x-8">
                    <div className="w-56 h-56 border border-gray-300 rounded-lg shadow-md p-4 bg-white hover:bg-blue-500 hover:text-white relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <button onClick={() => handlePlayButtonClick('/cat1')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#020917] w-20">Play</button>
                        </div>
                        <div className='text-center pt-5 font-bold text-2xl'>
                            Category 1
                        </div>
                    </div>
                    <div className="w-56 h-56 border border-gray-300 rounded-lg shadow-md p-4 bg-white hover:bg-blue-500 hover:text-white relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <button onClick={() => handlePlayButtonClick('/cat2')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#020917] w-20">Play</button>
                        </div>
                        <div className='text-center pt-5 font-bold text-2xl'>
                            Category 2
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mx-20 mt-4 space-x-8">
                    <div className="w-56 h-56 border border-gray-300 rounded-lg shadow-md p-4 bg-white hover:bg-blue-500 hover:text-white relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <button onClick={() => handlePlayButtonClick('/cat3')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#020917] w-20">Play</button>
                        </div>
                        <div className='text-center pt-5 font-bold text-2xl'>
                            Category 3
                        </div>
                    </div>
                    <div className="w-56 h-56 border border-gray-300 rounded-lg shadow-md p-4 bg-white hover:bg-blue-500 hover:text-white relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <button onClick={() => handlePlayButtonClick('/cat4')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#020917] w-20">Play</button>
                        </div>
                        <div className='text-center pt-5 font-bold text-2xl'>
                            Category 4
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categoryy;
