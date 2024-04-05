import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Lists = () => {
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
    <div className='m-16'>
      <h1 className='font-bold text-center text-black text-2xl p-6'>
        Online coaching lessons for remote learning.
      </h1>
      <div className=''>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>Lorem ipsum dolor sit amet</span>
            </h1>
            <button onClick={() => toggleContent(1)} className="text-blue-500">
              {showContent1 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent1 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent1 && (
            <div>
              <p className="mb-4">
                jdfdfdjdjd djfhdjfd jjjjggggg sjdjsjdsd vgvgh buhh mkvvcfcfcgggc vgvjjjjjjjjjjj bvvvvvvvvvvvvvvvvvvvvvv vbbbbbbbbb vbbbbbbb
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>Consecterur adipiscing elit sed do</span>
            </h1>
            <button onClick={() => toggleContent(2)} className="text-blue-500">
              {showContent2 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent2 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent2 && (
            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula,
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>Lorem ipsum dolor sit ame</span>
            </h1>
            <button onClick={() => toggleContent(3)} className="text-blue-500">
              {showContent3 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent3 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent3 && (
            <div>
              <p className="mb-4">
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,  Phasellus aliquet, felis in congue vehicula,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula,
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>Lorem psum dolor sit amet</span>
            </h1>
            <button onClick={() => toggleContent(4)} className="text-blue-500">
              {showContent4 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent4 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent4 && (
            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet,aliquet, felis in congue vehicula,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

        <div className="mb-10">
          <div className="custom-heading flex justify-between items-center relative">
            <h1 className="flex items-center mb-4">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              <span>Lorem ipsum dolor sit amete</span>
            </h1>
            <button onClick={() => toggleContent(5)} className="text-blue-500">
              {showContent5 ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {!showContent5 && <hr className="w-full h-0.5 bg-blue-500 absolute bottom-0 left-0" />}
          </div>
          {showContent5 && (
            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet,aliquet, felis in congue vehicula,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue vehicula, consectetur adipiscing elit. Lorem ipsum dolor sit am
              </p>
              <hr className="w-full h-0.5 bg-blue-500 mb-4" />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Lists;
