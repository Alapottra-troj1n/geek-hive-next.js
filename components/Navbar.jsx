import Link from 'next/link';
import React from 'react';

const Navbar = () => {


  const navLinks = <>
      <li>Home</li>
      <li>Gaming</li>
      <li>Programming</li>
  </>




    return (
        <div className="navbar  py-3 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-type text-xl tracking-wide font-bold gap-8">
          {navLinks}
            </ul>
          </div>
          <Link href={'/'}><span className="text-4xl tracking-wider font-display font-black">GEEK HIVE</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-type text-xl tracking-wide font-bold p-0 gap-8">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn px-10 text-lg font-display hover:bg-main hover:text-slate-800">Login</a>
        </div>
      </div>
    );
};

export default Navbar;