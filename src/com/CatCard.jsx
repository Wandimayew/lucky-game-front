import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faMoneyBillAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
import cardbg from '../assets/cardbg.json';

const CatCard = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleClick = (index) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(index)) {
        // If the card is already selected, remove it from the selectedCards array
        return prevSelected.filter((item) => item !== index);
      } else {
        // If the card is not selected, add it to the selectedCards array
        return [...prevSelected, index];
      }
    });
  };

  const isCardSelected = (index) => {
    return selectedCards.includes(index);
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className='bg-[#020917]'>
      <h2 className="text-3xl text-white font-bold text-center">Category one</h2>
      <h1 className='text-start pl-14 text-white'>balance =200 birr</h1>
      <div className="flex w-screen justify-center items-center relative">
        <div className="rounded-lg shadow-lg p-6 text-center absolute right-0 top-0 mt-4 mr-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={toggleInstructions}>
            How to play
          </button>
        </div>

        <div className="rounded-lg shadow-lg p-6 text-center">
          <p className="text-gray-600 text-lg text-center p-5">Choose your cards below.</p>
          <div className="grid grid-cols-3 gap-6 bg-white p-4" style={{ maxHeight: '409px' }}>
            {[...Array(10)].map((_, index) => (
              <div key={index}
                   className={`rounded-lg shadow p-2 flex flex-col items-center justify-center border-2 border-orange-500 transition duration-300 ease-in-out cursor-pointer 
                   ${isCardSelected(index) ? 'bg-white text-black' : 'bg-[#020917] text-orange-500'}
                   ${!isCardSelected(index) ? 'hover:bg-blue-800' : ''}`}
                   onClick={() => handleClick(index)}>
                <div className="text-4xl font-bold mb-2 flex items-center justify-center" style={{ width: '50px', height: '50px' }}>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showInstructions && (
          <div className="flex flex-col justify-center items-start text-white text-left max-w-md mx-8">
            <h1 className='text-3xl pb-5 text-white font-bold'>How to play the game?</h1>
            <p><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2 text-2xl" /> User can choose money cards.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2 text-2xl" /> One card costs 5 birr.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2 text-2xl" /> If the cards are chosen by others, they are locked.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2 text-2xl" /> After confirmation, you cannot cancel the game.</p>
            <p><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2 text-2xl" /> If you win, you get 45 birr added to your balance.</p>
            <p className="text-lg pl-20 pt-6 flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl mr-2" />
              <h1 className='text-2xl'>Happy gaming!</h1>
            </p>
            <p className="text-lg pl-20 flex items-center">
              <FontAwesomeIcon icon={faTimesCircle} className="text-green-500 text-2xl mr-2" />
              <h1 className='text-2xl'>Good luck!</h1>
            </p>
          </div>
        )}
      </div>
     

    </div>
  );
};

export default CatCard;
