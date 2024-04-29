import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import catAnimation from '../assets/cat.json';
import CatCard4 from '../screan/CatCard4';
import { ChoiceContext } from '../context/ChoiceContext';
import HttpClient from '../middleware/HttpClient';

const Categoryy = () => {
    const navigate = useNavigate();
    const [selectedCategory_id, setSelectedCategory] = useState(false);
    const [categories, setCategories] = useState([]);
    const [category_id,setCategoryId] = useState ([]);
    const { categoryChoiceId, setCategoryChoiceId } = useContext(ChoiceContext);
    const api = HttpClient();

    const handlePlayButtonClick = (route) => {
        setCategoryChoiceId(route);
        let num=route.category_id;
        console.log("objeccccccccc",num);
        navigate(`cat/${num}`);
    };

    useEffect(()=>{
        api.get(`api/category/getCategory`)
        // axios.get('http://localhost:3002/api/category/getCategory')
        .then((response) => {
            setSelectedCategory(true);
            setCategories(response.data.categories);
            console.log("response is: ",response.data.categories);
        })
        .catch((error) => {
            console.error(error);
        });
    },[]);

    return (

                <div className='mb-10'>
                <div className="flex bg-[#020917] items-top ml-20 ">
                    <div className="mb-6">
                        <Lottie animationData={catAnimation} style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div className='pt-10'>
                        <h2 className="text-3xl text-white font-bold">Choose Category</h2>
                        <p className="text-gray-600 text-lg">Select a category from the options below.</p>
                    </div>
                </div>
                <div className='pl-20'>
                    <div className="flex flex-wrap justify-between mx-20 space-x-8">
                        {categories.map((category, index) => (
                            <div key={index} className="w-56 h-56 border border-gray-300 rounded-lg shadow-md p-4 bg-white hover:bg-blue-500 hover:text-white relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <button onClick={
                                        () => handlePlayButtonClick(category)
                                       
                                        } className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#020917] w-20">Play</button>
                                </div>
                                <div className='text-center pt-5 font-bold text-2xl'>
                                    {category.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Categoryy;
