import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Lottie from 'lottie-react';
import blg from '../assets/blg2.json';

const BlogPage = () => {
  // Sample blog posts data (you can replace it with your actual data)
  const blogPosts = [
    {
      id: 1,
      title: "Exciting New Update: Multiplayer Mode Added!",
      date: "April 20, 2024",
      content: "We're thrilled to announce the addition of multiplayer mode...",
    },
    {
      id: 2,
      title: "Upcoming Event: Battle Royale Tournament",
      date: "May 5, 2024",
      content: "Get ready for the ultimate showdown in our upcoming Battle Royale tournament...",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container item-center py-8 ml-60"> {/* Added ml-40 class here */}
      <div className="flex items-center ml-60 mb-6">
        <Lottie animationData={blg} className="w-16 h-16 mr-2 text-white" />
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Game Blog</h1>
      </div>
      <div className="grid grid-cols-1 ml-48 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
            <div className="flex items-center text-gray-200 mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>{post.date}</p>
            </div>
            <p className="text-gray-200">{post.content}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 ml-48 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
            <div className="flex items-center text-gray-200 mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>{post.date}</p>
            </div>
            <p className="text-gray-200">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
