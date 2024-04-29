import React,{useEffect,useState} from "react";
import Lottie from "lottie-react";
import bg from "../assets/bg.json";
import winer from "../assets/winer.json";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import th from "../assets/3.jpg";
import axios from "axios";
import HttpClient from '../middleware/HttpClient';

const CourseDet = () => {
  const [data,setData]=useState([]);
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
  const limitedData = data.slice(0, 4);

  return (
    <div
      className="relative overflow-hidden mt-20 m-10 p-4 pl-20 border-transparent hover:border-blue-500 border-gray-200 rounded-lg shadow-xl sm:p-8 dark:border-gray-700"
      style={{ minWidth: "300px", minHeight: "500px" }}
    >
      {/* Render Lottie animation as background */}
      <div className="absolute inset-0 p-20">
        <Lottie animationData={bg} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-75">
        <div className="flex justify-center">
          <Lottie
            animationData={winer}
            style={{ width: "170px", height: "130px" }}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            winners
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {limitedData.map((item) => (
              <li key={item.winner_id} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={one}
                      alt="Profile"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.user_name}{" : "}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.prize_amount}{" Birr"}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-center text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
    </div>
  );
};

export default CourseDet;
