import React from "react";
import { FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div >
      <h2 className="text-4xl font-bold text-gray-300 mb-6">About Us</h2>
      <div className="text-lg text-gray-300 text-center w-full max-w-4xl px-6">
        <p className="mb-4">This project is developed by:</p>
        <p className="text-yellow-400">Vaishnavi Karayat</p>
        <p className="text-yellow-400">Yogesh Singh Rana</p>
        <p className="text-yellow-400">Abhay Pratap Singh</p>
        <p className="text-yellow-400">Vaibhav Pandey</p>
        <p className="mt-4">
          We are third-year students at Graphic Era Hill University, Bhimtal, currently pursuing a Bachelor of Technology (B.Tech) in Computer Science (6th semester).
        </p>
        <p className="mt-4">
          With a passion for technology and innovation, we strive to build efficient and impactful solutions. This project reflects our dedication to applying theoretical knowledge to real-world applications, enhancing our skills in software development, problem-solving, and teamwork.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4 mt-6">
        <div className="flex items-center space-x-3">
          <span className="text-lg text-blue-400">Vaishnavi Karayat</span>
          <a href="https://www.linkedin.com/in/vaishnavi-btech2026" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-lg text-blue-400">Yogesh Singh Rana</span>
          <a href="https://www.linkedin.com/in/yogesh-rana-253864284/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;