import React, { useEffect, useState } from 'react';
import th from '../assets/3.jpg';
import { useKeycloak } from '@react-keycloak/web';
import axios from 'axios';
import HttpClient from '../middleware/HttpClient';
import { useNavigate } from 'react-router-dom';
import AddBalance from './AddBalance';
import WithdrawForm from './WithdrawForm';

const Pro = () => {
  const { keycloak } = useKeycloak();
  const [balance, setBalance] = useState(0);
  const [fullName, setFullName] = useState(keycloak.idTokenParsed.name);
  const api = HttpClient();
  const [isAddBalance, setAddBalance]=useState(false);
  const [isWithDraw, setWithDraw]=useState(false);
  const [isFullScreen,setFullScreen]=useState(true);
  useEffect(() => {
    let player_id=keycloak.idTokenParsed.sub;
    console.log("playerrr id : ", player_id);
    api.get(`api/user/getUserBalance/${player_id}`)
    // axios.get(`http://localhost:3002/api/user/getUserBalance/${player_id}`)
    .then((response) => {
      console.log("response is: ", response.data.balance);
      setBalance(response.data.balance);

    }).catch((error) => {
      console.error(error);

    }

    )

  }, [])
  const handleAddBalance=()=>{
    setAddBalance(true);
    setFullScreen(false);
    setWithDraw(false);

  }
  const handleWithDrawBalance=()=>{
    setWithDraw(true);
    setAddBalance(false);
    setFullScreen(false);

  }
  const handleFullScreen=()=>{
    setFullScreen(true);
    setWithDraw(false);
    setAddBalance(false);

  }
  return (
    <>{
      isAddBalance && <AddBalance  exist={handleFullScreen}/>
    }
    {
      isFullScreen && 

    <div className=" bg-[#020917] text-white flex flex-col items-center justify-center mt-8 mr-20 ">
      {/* Profile picture */}
      <img src={th} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
      {/* Profile name */}
      <h5 className="text-3xl font-bold leading-none dark:text-white pt-5">{fullName}</h5>
      {/* Balance */}
      <p className="text-xl pt-6 font-medium  dark:text-white pb-5">Balance = {balance} birr</p>
      {/* Buttons */}
      <div className="mt-4">
        <button className="px-4 py-2 mr-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handleAddBalance}
        >Add Balance</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
        onClick={handleWithDrawBalance}
        >Withdraw Balance</button>
      </div>
    </div>
    }
    {
      isWithDraw &&  <WithdrawForm exist={handleFullScreen} />
    }
    </>
  );
};

export default Pro;
