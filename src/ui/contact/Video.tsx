import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Notebook, Search } from "lucide-react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between px-4 w-full ">
      <div className="relative flex flex-none">
        <div className="py-2">
          <button
            onClick={toggleDropdown}
            className="bg-red-600 rounded-md p-2 flex justify-between items-center w-40"
          >
            <span className="text-white ">BIM</span>
            <Notebook height={25} width={25} />
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0rounded-md w-auto z-10 ">
            <ul className="list-none flex flex-col  ">
              {[...Array(8)].map((_, index) => (
                <li key={index} className="p-2 gap-2">
                  <Link
                    to="#"
                    className="text-white block px-6 py-2 bg-red-600 text-l rounded-md"
                  >
                    BIM {index + 1} sem
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" py-2">
        <form className="flex items-center max-w-lg mx-auto">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              ></svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50   text-sm  w-full ps-10 p-2  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 border-2 border-red-600 rounded-md"
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            ></button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium bg-red-600 rounded-md text-white"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default DropdownMenu;
