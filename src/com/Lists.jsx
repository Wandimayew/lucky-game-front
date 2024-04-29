import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaTelegram, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Lists = ({ onStartClick }) => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);

  const toggleContent = (contentNumber) => {
    switch (contentNumber) {
      case 1:
        setShowContent1(!showContent1);
        break;
      case 2:
        setShowContent2(!showContent2);
        break;
      case 3:
        setShowContent3(!showContent3);
        break;
      case 4:
        setShowContent4(!showContent4);
        break;
      case 5:
        setShowContent5(!showContent5);
        break;
      default:
        break;
    }
  };

  return (
    <div className='m-16 mx-20 text-white'>
      <h1 className='font-bold text-center text-white text-2xl p-6'>
        Answer for all of your questions
      </h1>
      <div className=''>
        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>How can i start the game </span>
            </h1>
            <button onClick={() => toggleContent(1)} className="text-blue-500">
              {showContent1 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent1 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent1 && (
            <div>
              <p className="mb-4">
                To start the game, click the "Start" button below. You will then be directed to the login or sign up page. After logging in, you can proceed to start the game.
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>How can i play the game </span>
            </h1>
            <button onClick={() => toggleContent(2)} className="text-blue-500">
              {showContent2 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent2 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent2 && (
            <div>
              <p className="mb-4">
                To play the game, follow these steps:
                <br />
                1. Choose one category from the four available categories.
                <br />
                2. Once you've selected a category, you'll see 10 numbers along with their prizes.
                <br />
                3. Select any number from the list. If the number has not been chosen by another player, you win the prize associated with that number.
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>How to pay and withdrawal </span>
            </h1>
            <button onClick={() => toggleContent(3)} className="text-blue-500">
              {showContent3 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent3 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent3 && (
            <div>
              <p className="mb-4">
                You can easily manage your payments and withdrawals using our secure money payment method, which works with ASS (Anonymous Secure System). With ASS, you can:
                <br />
                - Deposit funds into your account securely.
                <br />
                - Withdraw your winnings quickly and conveniently.
                <br />
                - Share funds with other players effortlessly.
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>How can i now if i win the game </span>
            </h1>
            <button onClick={() => toggleContent(4)} className="text-blue-500">
              {showContent4 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent4 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent4 && (
            <div>
              <p className="mb-4">
                If you win the game, you will receive a notification informing you of your victory. Additionally, the money you win will be added to your balance automatically.
                <br />
                Even if you do not win the game, you will still receive a notification indicating who the winner is.
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>For more questions </span>
            </h1>
            <button onClick={() => toggleContent(5)} className="text-blue-500">
              {showContent5 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent5 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent5 && (
            <div className="mb-4">
              <p className="mb-4">
                If you have more questions, you can contact us through various channels:
              </p>
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <FaTelegram className="text-orange-500" /> 
                  <span className="ml-2">Telegram: @ourtelegramhandle</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaFacebook className="text-orange-500" /> 
                  <span className="ml-2">Facebook: /ourfacebookpage</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaTwitter className="text-orange-500" /> 
                  <span className="ml-2">Twitter: @ourtwitterhandle</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaInstagram className="text-orange-500 ml" /> 
                  <span className="ml-2">Instagram: @ourinstagramhandle</span>
                </div>
              </div>
              <p>Or you can reach our call center at: +251985246737</p>
            </div>
          )}
        </div>
      </div>
      <button onClick={onStartClick} className="bg-blue-500 justify-center ml-96  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-110">
        Start now
      </button>
    </div>
  );
};

export default Lists;
