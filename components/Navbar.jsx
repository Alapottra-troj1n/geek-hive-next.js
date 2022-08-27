import Link from 'next/link';
import React from 'react';

const Navbar = () => {


  const navLinks = <>
      <li className='cursor-pointer hover:text-main transition-all' >Home</li>
      <li className='cursor-pointer hover:text-main transition-all' >Gaming</li>
      <li className='cursor-pointer hover:text-main transition-all' >Programming</li>
  </>




    return (
      <div className='fixed w-full bg-stone-900 text-white z-50'>
        <div className="navbar max-w-7xl  py-5 mx-auto ">
   
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-type text-xl tracking-wide font-bold gap-8">
          {navLinks}
            </ul>
          </div>
          <Link href={'/'}><span className="text-2xl tracking-wider font-type font-extrabold hover:text-main transition-all cursor-pointer">GEEK HIVE</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-type text-lg tracking-wide font-bold p-0 gap-8">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" px-7 py-1 transition-all font-semibold font-type border-main text-lg  bg-main hover:border-main border-2 text-black hover:bg-stone-900 cursor-pointer hover:text-white  ">LOGIN</a>
        </div>
    
      </div>
      </div>
    );
};

export default Navbar;