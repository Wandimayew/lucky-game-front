import React from 'react';

const YourComponent = () => {
  // Assuming dynamic data
  const data = [
    { id: 1, name: 'Temesgen M.', amount: '100 birr', imageSrc: one },
    { id: 2, name: 'Another Name', amount: '200 birr', imageSrc: another },
    // Add more data objects as needed
  ];

  // Slice the array to get the first four elements
  const limitedData = data.slice(0, 4);

  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {limitedData.map((item) => (
          <li key={item.id} className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={item.imageSrc} alt="Profile" />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {item.name}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {item.amount}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
