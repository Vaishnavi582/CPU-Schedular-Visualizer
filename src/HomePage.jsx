import React, { useState } from "react";
import Button from "./components/ui/Button";
import Home from "./pages/Home";
import Visualize from "./pages/Visualize";
import AboutUs from "./pages/AboutUs";

const HomePage = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 p-4 flex justify-between items-center shadow-md fixed top-0 z-50">

        <h1 className="text-white text-2xl font-bold px-6 tracking-wide">CPU Scheduler</h1>
        <div className="flex space-x-6 pr-6">
          <Button className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition duration-300" onClick={() => setPage("home")}>
            Home
          </Button>
          
          <Button className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition duration-300" onClick={() => setPage("visualize")}>
            Visualize
          </Button>
         
          <Button className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition duration-300" onClick={() => setPage("visualize")}>
            Evaluate
          </Button>
          <Button className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition duration-300" onClick={() => setPage("visualize")}>
            Gantt Chart
          </Button>
          <Button className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition duration-300" onClick={() => setPage("aboutUs")}>
            About Us
          </Button>
          
        </div>
      </nav>

      {/* Page Content */}
      <div className="text-center mt-20 px-4">
        {page === "home" && <Home />}
        {page === "visualize" && <Visualize />}
        {page === "aboutUs" && <AboutUs />}
      </div>
    </div>
  );
};

export default HomePage;
