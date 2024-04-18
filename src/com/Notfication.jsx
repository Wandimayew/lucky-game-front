import React from 'react';
import Lottie from 'lottie-react';
import not from '../assets/not.json';

const Notification = () => {
  return (
    <div className="absolute top-10 pr-5 right-0">
    <div className="bg-[#020917] border-2 border-orange-500 flex flex-col items-center justify-center mt-8 rounded-lg p-6">
      {/* Lottie animation */}
      <div className="w-32 h-32 mb-4">
        <Lottie animationData={not} />
      </div>
      {/* Category 1 */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4 w-64 text-center">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Category 1</h5>
        <p className="text-sm font-medium text-gray-900 dark:text-white">Loss</p>
        <p className="text-sm font-medium text-gray-900 dark:text-white">Balance: 0</p>
      </div>
      {/* Category 3 */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4 w-64 text-center">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Category 3</h5>
        <p className="text-sm font-medium text-gray-900 dark:text-white">Win</p>
        <p className="text-sm font-medium text-gray-900 dark:text-white">Balance: 200 birr</p>
      </div>
    </div>
    </div>
  );
};

export default Notification;
