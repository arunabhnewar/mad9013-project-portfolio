import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <span className='text-2xl font-[Poppins] cursor-pointer flex items-center'>
            <img
              className='h-10 inline'
              src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
              alt='Tailwind Logo'
            />
            <p className='ml-2 text-3xl'>Portfolio</p>
          </span>
        </Link>

        <span
          className='text-3xl cursor-pointer mx-2 md:hidden block'
          onClick={toggleMenu}>
          {isMenuOpen ? <IoCloseSharp /> : <IoMdMenu />}
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
          isMenuOpen ? "opacity-100 top-100" : "opacity-0 top-[-400px]"
        } transition-all ease-in duration-500 bg-red-600`}>
        <li className='mx-4 my-6 md:my-0'>
          <Link to='/' className='text-xl hover:text-cyan-500 duration-500'>
            HOME
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link
            to='portfolio'
            className='text-xl hover:text-cyan-500 duration-500'>
            PORTFOLIO
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link
            to='contact'
            className='text-xl hover:text-cyan-500 duration-500'>
            CONTACT
          </Link>
        </li>

        {/* <button className='bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>
          Get started
        </button> */}
        <h2 className=''></h2>
      </ul>
    </nav>
  );
};

export default Navbar;
