import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Youtube, LogIn } from "lucide-react";
import Model from "./model/Model";

const Navbar = () => {
  const [openModel, setOpenModel] = useState(false);

  const openModal = () => {
    setOpenModel(true);
  };

  const closeModal = () => {
    setOpenModel(false);
  };

  return (
    <nav className="bg-red-600 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="#" className="text-2xl flex items-center">
            Video Streaming
            <span className="ml-2">
              <Youtube height={30} width={30} />
            </span>
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={openModal} className="text-xl">
            <LogIn height={30} width={30} />
          </button>
          <Model open={openModel} onClose={closeModal} />
        </div>
        <ul className="hidden md:flex gap-5 text-xl">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/video">Video</NavLink>
          </li>
          <li>
            <button onClick={openModal}>
              <LogIn height={30} width={30} />
            </button>
            <Model open={openModel} onClose={closeModal} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
