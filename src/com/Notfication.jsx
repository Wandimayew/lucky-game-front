import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import not from "../assets/not.json";
import axios from "axios";
import HttpClient from '../middleware/HttpClient';

const Notification = () => {
  const [category, setCategory] = useState([]);
  const [winner, setwinner] = useState([]);
  const [game_id, setGame_id] = useState([]);
  const [price, setPrice] = useState([]);
  const [data, setData]=useState([]);
  const api = HttpClient();

  useEffect(() => {
    api.get("api/winner/getAllWinners")
    // axios
    //   .get("http://localhost:3002/api/winner/getAllWinners")
      .then((response) => {
        let datas = response.data.winners;
        setData(datas);
        console.log("response is:", datas);

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="absolute top-10 pr-5 right-0">
      <div className="bg-[#020917] border-2 border-orange-500 flex flex-col items-center justify-center mt-8 rounded-lg p-6">
        {/* Lottie animation */}
        <div className="w-32 h-32 mb-4">
          <Lottie animationData={not} />
        </div>
        {/* Category 1 */}(
        <div className="flex flex-wrap flex-col h-50 overflow-y-visible justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg mb-4 w-64 text-center"
            >
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Category: {item.category_id}
              </h5>

              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Winner: {item.user_name}
              </p>

              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Game ID: {item.game_id}
              </p>

              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Rank: {item.position}
              </p>

              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Winning Amount: {item.prize_amount} Birr
              </p>
            </div>
          ))}
        </div>
        );
      </div>
    </div>
  );
};

export default Notification;
