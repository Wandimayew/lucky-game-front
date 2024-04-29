import React,{useEffect} from 'react';
import { FaSun } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '../assets/win.json';
import Footer from '../welcome-pages/Footer';
import p1 from '../assets/1.jpg';
import p2 from '../assets/2.png';
import p3 from '../assets/3.jpg';
import p4 from '../assets/4.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';
import p8 from '../assets/8.png';
import CourseDet from '../com/CourseDet';
import Circle from './Circle';
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Lists from '../com/Lists';

const Welcome = ({ onStartClick }) => {
  const { keycloak, initialized } = useKeycloak();
  const navigate = useNavigate();

  useEffect(()=>{
    if (initialized && keycloak.authenticated) {
      // Access user information after authentication
      console.log('User ID:', keycloak.idTokenParsed.sub);
      console.log('User Email:', keycloak.idTokenParsed.email);

      console.log("navigating");
  }

  },[initialized, keycloak])

  const handleLogin = () => {
    if (!keycloak.authenticated) {
      console.log("user click and not authenticated",initialized);
      console.log("user click and  not authenticated",keycloak);
      console.log(keycloak.authenticated);
      keycloak.login(); 
    } else {
      console.log("user clicked and authenticated");
      // navigate("/home");
      onStartClick();
    }
  };
  return (
    <div className='bg-[#020917]'>
      <div className='rounded-b-3xl rounded-t-3xl border-b-2 mb-10'>
        <div className="text-end pr-20 justify-center pt-[2rem] pb-[4rem]">
          <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-110">
            Start now
          </button>
          <div className="absolute top-5 right-5 mt-4 mr-4">
            <FaSun className="text-orange-300 text-2xl" />
          </div>
        </div>
      </div>
      <div className="bg-[#081730]">
        <div className='flex flex-row pt-10 pb-10 space-x-4 pl-36 pr-20 rounded-b-3xl rounded-t-3xl'>
          <div className="flex flex-col justify-center text-white">
            <h1 className="font-bold text-6xl">Welcome</h1>
            <p className="text-lg mt-4">
              Ready to join a vibrant community of players?
            </p>
            <p className="text-lg">
              Compete for top prizes, unlock achievements,
            </p>
            <p className="text-lg">
              collect coins, and customize your avatar!
            </p>
          </div>
          <div className="flex-1 pl-40">
            <div className="flex flex-col justify-center items-center">
              <Lottie animationData={animationData} style={{ width: '350px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
      <div className='item-start'>
        <div className='flex flex-row'>
          <div className='mx-20 item-start' style={{ minWidth: 'auto', minHeight: '500px' }}>
            <CourseDet />
          </div>
          <div className='pt-40'>
            <div className='flex'>
              <h1 className='font-bold text-4xl text-white p-8'>Payment Methods</h1>
            </div>
            <div className="flex justify-center space-x-8">
              <img src={p1} alt="p1" className="payment-image hover:scale-110 transform transition duration-300 ease-in-out" style={{ width: '100px', height: '100px' }} />
              <img src={p2} alt="p2" className="payment-image hover:scale-110 transform transition duration-300 ease-in-out" style={{ width: '100px', height: '100px' }} />
              <img src={p3} alt="p3" className="payment-image hover:scale-110 transform transition duration-300 ease-in-out" style={{ width: '100px', height: '100px' }} />
              <img src={p4} alt="p4" className="payment-image hover:scale-110 transform transition duration-300 ease-in-out" style={{ width: '100px', height: '100px' }} />
            </div>
            <div className="flex justify-center space-x-8 mt-4">
              <img src={p5} alt="p5" className="payment-image hover:scale-110 transform transition duration-300 ease-in-out" style={{ width: '100px', height: '100px' }} />
              <img src={p6} alt="p6" className="payment-image hover:scale-110 transform transition duration-300 ease-in-out" style={{ width: '100px', height: '100px' }} />
              <img src={p7} alt="p7" className="payment-image hover:scale-110 transform transition duration-300 ease-in-out" style={{ width: '100px', height: '100px' }} />
              <img src={p8} alt="p8" className="payment-image hover:scale-110 transform transition duration-300 ease-in-out" style={{ width: '100px', height: '100px' }} />
            </div>
          </div>
        </div>
      </div>
      <Circle/>
      <Lists/>
      <Footer />
    </div>
  );
}

export default Welcome;
