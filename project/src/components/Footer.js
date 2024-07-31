import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../components/Logo";
import check from "../assests/icons/check.png";

const Footer = () => {
  return (
   <footer className='mt-auto  h-12   bg-black w-full  z-40 relative flex items-center justify-between sm:h-16'>
   <div className="h-full container mx-auto flex items-center px-4  ml-[50px] justify-between ">
          <div className="">
            <Link to={"/"}>
              <Logo h={24} w={107} />
            </Link>
            </div>
            </div>
            <div className='flex justify-center  container ml-52'>
              <nav>
                <ul className='flex gap-5 justify-center items-center font-sans text-[14px]'>
                  <li className='text-white cursor-pointer font-normal opacity-80 hover:opacity-100 hover:text-blue-300'>Privacy Statement</li>
                  <li className='flex top-1 cursor-pointer hover:opacity-100 hover:text-blue-300 text-white'>Opt Out 
                    <img alt='' src={check} className='w-7 h-3 mt-[5px] ml-[1px] flex'></img>
                  </li>
                  <li className="text-white  font-normal opacity-80 hover:opacity-100 hover:text-blue-300">
                  <Link to={"/Doc"}>Doc</Link>
                </li>
                <li className="text-white  font-normal opacity-80 hover:opacity-100 hover:text-blue-300">
                  <Link to={"/GitHub"}> ☆ Star us on GitHub</Link>
                </li>
                </ul>
              </nav>
            </div>
   </footer>
  )
}

export default Footer;