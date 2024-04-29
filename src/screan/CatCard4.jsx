import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useKeycloak } from "@react-keycloak/web";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import io from "socket.io-client";
import { ChoiceContext } from "../context/ChoiceContext";
import HttpClient from '../middleware/HttpClient';

const CatCard4 = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { categoryChoiceId } = useContext(ChoiceContext);
  const [choice, setChoice] = useState(0);
  const { keycloak } = useKeycloak();
  const [playerId, setPlayerId] = useState(keycloak.idTokenParsed.sub);
  const [gameId, setGameId] = useState(0);
  const [isChoiced, setIsChoiced] = useState(false);
  const [choisedNumbers, setChoisedNumbers] = useState([]);
  const api = HttpClient();

  const categoryId=categoryChoiceId.category_id

  console.log("category id : ", categoryChoiceId);
  const handleClick = (index) => {
    if (selectedCards.includes(index)) {
      // Handle error: Number already selected
      // Optionally, show a message to the user indicating that the number is unavailable
      console.log("Number already selected");
      return;
    }
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index);
      } else {
        return [...prevSelected, index];
      }
    });
    console.log("index lick", index + 1);
    setChoice(index + 1);
  };
  console.log("second choice", choice);

  const socket = io("http://localhost:3002");

  

  useEffect(() => {
    api.post(`api/game/addGame/${categoryId}`)
    // axios
    //   .post(`http://localhost:3002/api/game/addGame/${categoryChoiceId}`)
      .then((response) => {
        console.log("response for game is: ", response.data.game.game_id);
        setGameId(response.data.game.game_id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryChoiceId.category_id]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });
    console.log("socket id : ");
    socket.on("user_choice",(data)=>{
      console.log("data is ");
      console.log("user choice",data);
    })
    socket.on("selectedNumbers", (selectedNumbers) => {
      console.log("user recieved number", selectedNumbers);
      if (Array.isArray(selectedNumbers)) {
        console.log("selectedNumbers : ", selectedNumbers);
        // Extract the chosen numbers from the selectedNumbers array
        const newNumbers = selectedNumbers.map(selectedNumber => selectedNumber.choisedNumber);
        console.log("inside the array");
        // Filter out numbers that are already present in choisedNumbers
        const uniqueNewNumbers = newNumbers.filter(number => !choisedNumbers.includes(number));
        
        // Update choisedNumbers state with the unique numbers
        setChoisedNumbers(prevNumbers => [...prevNumbers, ...uniqueNewNumbers]);
      }else{
        console.log("selectedNumbers is not an array");
      }
    });
    return () => {
      socket.disconnect(); // Clean up on unmount
    };
  }, []);
  useEffect(() => {
    // const categoryId=categoryChoiceId.category_id
    // Only make the API call if gameId is not 0
    if (gameId !== 0) {
      api.post(`api/category/getNotSelectedChoice`,{ categoryId, gameId })
      // axios
      //   .post(`http://localhost:3002/api/category/getNotSelectedChoice`, { categoryChoiceId, gameId })
        .then((response) => {
          console.log("response for game is  j: ", response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [gameId]);

  const isCardSelected = (index) => {
    return selectedCards.includes(index);
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };


  const handleConfirm = () => {
    console.log("player id : ", playerId);
    console.log("game id : ", gameId);
    console.log("choice : ", choice);
    console.log("category id : ", categoryChoiceId.category_id);

    api.post(`api/choice/addUserChoice`, {
      player_id: playerId,
      category_id: categoryChoiceId.category_id,
      selected_number: choice,
      game_id: gameId,
    })
    api.post(`api/transaction/addTransaction`,{
      player_id: playerId,
      category_id: categoryChoiceId.category_id, 
      game_id: gameId, 
      amount: (1* categoryChoiceId.multiplier), 
      description: ("Gambling on category :"+ categoryId)
    })
    // axios
    //   .post(`http://localhost:3002/api/choice/addUserChoice`, {
    //     player_id: playerId,
    //     category_id: categoryChoiceId,
    //     selected_number: choice,
    //     game_id: gameId,
    //   })
      .then((response) => {
        console.log("response for user Choice is: ", response);
        // socket.emit("user_choice", { player_id: playerId, choice: choice });
      })
      .catch((error) => {
        console.log("failed to add user Choice");
        console.error(error);
      });
  };


  console.log("choisedNumbers", choisedNumbers);
  // Function to navigate to home page
  const goToHomePage = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="bg-[#020917]">
      {/* Icon to navigate to home page */}
      <div
        className="absolute top-0 left-10 ml-60 mt-16  p-4 cursor-pointer"
        onClick={goToHomePage}
      >
        <FontAwesomeIcon icon={faTimesCircle} className="text-white text-2xl" />
      </div>

      <h2 className="text-3xl text-white font-bold text-center pt-5">
        Category {categoryChoiceId.category_id}
      </h2>
      <h1 className="text-start pl-14 text-white">Balance =200 birr</h1>
      <div className="flex w-screen justify-center items-center relative">
        <div className="rounded-lg shadow-lg p-6 text-center absolute right-0 top-0 mt-4 mr-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={toggleInstructions}
          >
            How to play
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mb-4 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleConfirm}
          >
            Confirm Choice
          </button>
        </div>

        <div className="rounded-lg shadow-lg pb-10 text-center">
          <p className="text-gray-600 text-lg text-center pb-3">
            Choose your cards below.
          </p>
          <div
            className="grid grid-cols-3 gap-6 bg-white p-4"
            style={{ maxHeight: "409px" }}
          >
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`rounded-lg shadow p-2 flex flex-col items-center justify-center border-2 border-orange-500 transition duration-300 ease-in-out cursor-pointer 
                   ${
                     (isCardSelected(index) || choisedNumbers.includes(index+1))
                       ? "bg-white text-black"
                       : "bg-[#020917] text-orange-500"
                   }
                   ${!isCardSelected(index)|| choisedNumbers.includes(index+1) ? "hover:bg-blue-800" : ""}`}
                onClick={() => handleClick(index)}
              >
                <div
                  className="text-4xl font-bold mb-2 flex items-center justify-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showInstructions && (
          <div className="flex flex-col justify-center items-start text-white text-left max-w-md mx-8">
            <h1 className="text-3xl pb-5 text-white font-bold">
              How to play the game?
            </h1>
            <p>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2 text-2xl"
              />{" "}
              User can choose money cards.
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2 text-2xl"
              />{" "}
              One card costs 50 birr.
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2 text-2xl"
              />{" "}
              If the cards are chosen by others, they are locked.
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2 text-2xl"
              />{" "}
              After confirmation, you cannot cancel the game.
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 mr-2 text-2xl"
              />{" "}
              If you win, you get 450 birr added to your balance.
            </p>
            <p className="text-lg pl-20 pt-6 flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 text-2xl mr-2"
              />
              <h1 className="text-2xl">Happy gaming!</h1>
            </p>
            <p className="text-lg pl-20 flex items-center">
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="text-green-500 text-2xl mr-2"
              />
              <h1 className="text-2xl">Good luck!</h1>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatCard4;
