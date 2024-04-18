import React from 'react';
import Lottie from 'lottie-react';
import bg from '../assets/bg.json';
import winer from '../assets/winer.json';
import one from '../assets/1.jpg'; 
import two from '../assets/2.jpg'; 
import th from '../assets/3.jpg';

const CourseDet = () => {
  return (
    <div className="relative overflow-hidden mt-20 m-10 p-4 pl-20 border-transparent hover:border-blue-500 border-gray-200 rounded-lg shadow-xl sm:p-8 dark:border-gray-700" style={{ minWidth: '300px', minHeight: '500px' }}>
      {/* Render Lottie animation as background */}
      <div className="absolute inset-0 p-20">
        <Lottie animationData={bg} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-75">
        <div className="flex justify-center">
          <Lottie animationData={winer} style={{ width: '170px', height: '130px' }} />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">winers</h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={one} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Temesgen M.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  100 birr
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={one} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Temesgen M.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  100 birr
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={one} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Temesgen M.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  100 birr
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={one} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Temesgen M.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  100 birr
                </div>
              </div>
            </li>
            {/* Other list items */}
          </ul>
        </div>
        <a href="#" className="text-sm font-medium text-center text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a>
      </div>
    </div>
  );
};

export default CourseDet;
