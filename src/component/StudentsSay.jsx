import profile from '../assets/img/profile.png'; // Importing the profile picture
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const StudentsSay = () => {
    return (
        <div className="bg-[#e5e5e7] p-10 pb-28">
            <h1 className="font-bold text-black text-2xl">
                What our students have to say
            </h1>
            <div className="flex justify-between items-center mt-6 ">
                <div className="flex items-center justify-center h-12 w-12 bg-blue-500 rounded-full cursor-pointer" style={{ marginLeft: '-20px' }}>
                    <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
                </div>
                
                <div className="w-[30%] bg-white border border-gray-300 rounded-lg m-2 ">
                    <img src={profile} alt="Profile" className="pt-6 mx-auto rounded-lg" />
                    <div className="text-center mt-3">
                        <div className='pb-5 pt-5'>
                            <strong >Bulkin Simons</strong>
                        </div>
                       
                        <p className="mt-1 pb-5 pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue </p>
                    </div>
                </div>

                <div className="w-[30%] bg-white border border-gray-300 rounded-lg m-2">
                    <img src={profile} alt="Profile" className="pt-6 mx-auto rounded-lg" />
                    <div className="text-center mt-3">
                        <div className='pb-5 pt-5'>
                            <strong >Bulkin Simons</strong>
                        </div>
                        <p className="mt-1 pb-5 pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue </p>
                   </div>
                </div>

                <div className="w-[30%] bg-white border border-gray-300 rounded-lg m-2">
                    <img src={profile} alt="Profile" className="pt-6 mx-auto rounded-lg" />
                    <div className="text-center mt-3">
                        <div className='pb-5 pt-5'>
                            <strong >Bulkin Simons</strong>
                        </div>
                       
                        <p className="mt-1 pb-5 pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue </p>
                     </div>
                </div>

                <div className="w-[30%] bg-white border border-gray-300 rounded-lg m-2">
                    <img src={profile} alt="Profile" className="pt-6 mx-auto rounded-lg" />
                    <div className="text-center mt-3">
                        <div className='pb-5 pt-5'>
                            <strong >Bulkin Simons</strong>
                        </div>
                        <p className="mt-1 pb-5 pl-5 pr-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in congue </p>
                    </div>
                </div>
                
                <div className="flex items-center justify-center h-12 w-12 bg-blue-500 rounded-full cursor-pointer" style={{ marginRight: '-20px' }}>
                    <FontAwesomeIcon icon={faChevronRight} className="text-white" />
                </div>
            </div>
        </div>
    );
}

export default StudentsSay;
