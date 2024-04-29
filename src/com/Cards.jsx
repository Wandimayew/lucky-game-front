import React,{useState,useEffect} from 'react';
import HttpClient from '../middleware/HttpClient';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

const Cards = () => {
  const [playerCount,setPlayerCount]=useState(0);
  const [categoryCount,setCategoryCount]=useState(0);
  const [transactionCOunt,setTransactionCount]=useState(0);
  const [gameCount,setGameCount]=useState(0);
  const api = HttpClient();

  useEffect(()=>{
    api.get("api/user/getUserCount")
    // axios
    //   .get("http://localhost:3002/api/user/getUserCount")
      .then((response) => {
        console.log("user count is: ",response.data.count);
        setPlayerCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });
      api.get("api/category/getCategoryCount")
    // axios
    //   .get("http://localhost:3002/api/category/getCategoryCount")
      .then((response) => {
        console.log("Category count is: ",response.data.count);
        setCategoryCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });
      api.get("api/transaction/getTransactionCount")
    // axios
    //   .get("http://localhost:3002/api/category/getCategoryCount")
      .then((response) => {
        console.log("Category count is: ",response.data.count);
        setTransactionCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });
      api.get("api/game/getGamesCount")
    // axios
    //   .get("http://localhost:3002/api/category/getCategoryCount")
      .then((response) => {
        console.log("Game count is: ",response.data.count);
        setGameCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });

  },[])
  return (
    <div className='main-cards grid grid-cols-4 gap-4 py-20'>
      <button className='card bg-blue-500 text-white p-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'>
        <div className='card-inner flex items-center justify-between'>
          <h3 className="text-lg">Gams</h3>
          <BsFillArchiveFill className='card_icon text-3xl' />
        </div>
        <p className="text-xl">{gameCount}</p>
      </button>
      <button className='card bg-orange-500 text-white p-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50'>
        <div className='card-inner flex items-center justify-between'>
          <h3 className="text-lg">CATEGORIES</h3>
          <BsFillGrid3X3GapFill className='card_icon text-3xl' />
        </div>
        <p className="text-xl">{categoryCount}</p>
      </button>
      <button className='card bg-green-500 text-white p-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50'>
        <div className='card-inner flex items-center justify-between'>
          <h3 className="text-lg">Players</h3>
          <BsPeopleFill className='card_icon text-3xl' />
        </div>
        <p className="text-xl">{playerCount}</p>
      </button>
      <button className='card bg-red-500 text-white p-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'>
        <div className='card-inner flex items-center justify-between'>
          <h3 className="text-lg">ALERTS</h3>
          <BsFillBellFill className='card_icon text-3xl' />
        </div>
        <p className="text-xl">{transactionCOunt}</p>
      </button>
    </div>
  );
};

export default Cards;
