import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'; 

const Affordable = () => {
    return (
        <div className='pt-10'>
            <div className="text-center">
                <h1 className="text-5xl font-bold text-teal-500">
                    Affordable Pricing
                </h1>
            </div>
            <div className='flex '>
                <div>
                    <div className='pt-10 pl-32 ml-10 mt-10'>
                        <div className="flex flex-col  mb-4">
                            <h1 className='text-teal-500 font-bold'>Like a pussy</h1>
                            <h1> <span className='text-4xl font-bold'>Free</span>/FOREVER</h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-teal-500 mr-2 fa-lg" />
                            <p className="text-lg">Components-driven system</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-teal-500 mr-2 fa-lg" />
                            <p className="text-lg">Sales-boosting landing pages</p>
                        </div>
                        <div className="flex items-center mb-16">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-teal-500 mr-2 fa-lg" />
                            <p className="text-lg">Awesome Feather icons pack</p>
                        </div>
                        <div>
                            <button className="border w-64 mt-14 border-teal-500 text-teal-500 bg-white px-4 py-2 rounded-lg">
                                Try for free
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='ml-10 mt-10 shadow-md rounded-md p-10'>
                        <div className="flex flex-col  mb-4">
                            <div className='flex '>
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faUser} className=" mr-2" />
                                    <h1 className='text-teal-500 pr-28 font-bold'>Individual</h1>
                                </div>
                                <button className='border  border-black text-sm h-8 w-24 text-center text-teal-500 bg-white px-4 py-2 rounded-lg'>BEST!</button>
                            </div>
                            <h1> <span className='text-4xl font-bold'>$24</span>/MONTH</h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mr-2 fa-lg" />
                            <p className="text-lg">Components-driven system</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mr-2 fa-lg" />
                            <p className="text-lg">Sales-boosting landing pages</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mr-2 fa-lg" />
                            <p className="text-lg">Awesome Feather icons pack</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500   mr-2 fa-lg" />
                            <p className="text-lg">Themed into 3 different styles </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500 mr-2 fa-lg" />
                            <p className="text-lg">Will help to learn Figma</p>
                        </div>
                        <div>
                            <button className="border w-64 font-bold bg-teal-500 text-white  px-4 py-2 rounded-lg">
                                Regular license 
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='pt-10 pl-20 ml-10 mt-10'>
                        <div className="flex flex-col  mb-4">
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon icon={faUsers} className=" mr-2" />
                                <h1 className='text-teal-500 font-bold'>Corporate</h1>
                            </div>
                            <h1> <span className='text-4xl font-bold'>$12</span>/EDITOR</h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-teal-500 mr-2 fa-lg" />
                            <p className="text-lg">Components-driven system</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-teal-500 mr-2 fa-lg" />
                            <p className="text-lg">Sales-boosting landing pages</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-teal-500 mr-2 fa-lg" />
                            <p className="text-lg">Awesome Feather icons pack</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-teal-500 mr-2 fa-lg" />
                            <p className="text-lg">Themed into 3 different style</p>
                        </div>
                        <div>
                            <button className="border w-64 mt-16 border-teal-500 text-teal-500 bg-white px-4 py-2 rounded-lg">
                                Extended license
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affordable;
