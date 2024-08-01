import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
// import Lottie from 'lottie-react'
// import animationData from '../assests/Animation - 1721637368700.json'

function Header() {
  return (
    
      <header className="h-12   bg-black w-full  z-40">
        <div className="h-full container mx-auto flex items-center px-4 justify-between ">
          <div className="">
            <Link to={"/"}>
              <Logo h={24} w={107} />
            </Link>
          </div>
          <div className="flex justify-end  container ml-52">
            <nav>
              <ul className="flex gap-5 justify-center items-center font-sans text-[14px]">
                <li className="text-white  font-semibold opacity-80 hover:opacity-100 hover:text-blue-300">
                  <Link to={"/Doc"}>Doc</Link>
                </li>
                <li className="text-white font-semibold opacity-80 hover:opacity-100 hover:text-blue-300">
                  <Link to={"/GitHub"}> ☆ Star us on GitHub</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex justify-center  items-start w-80  text-white">
            <button className="hover:opacity-100 font-semibold bg-transparent rounded-full px-3 py-0.5 opacity-80 border hover:text-blue-300">
              Get Started
            </button>
          </div>
        </div>
      </header>
  
  );
}

export default Header;
