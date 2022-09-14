import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"
const Navbar = ({ setSigninVisible, signinVisible }) => {






  const { data, status } = useSession();

  console.log(data, status);




  const setSigninVisibleFunc = () => {
    setSigninVisible(!signinVisible);
  }

  const navLinks = <>
    <Link href={'/'} ><li className='cursor-pointer hover:text-main transition-all' >Home</li></Link>
    <Link href={'/gaming'} ><li className='cursor-pointer hover:text-main transition-all' >Gaming</li></Link>
    <li className='cursor-pointer hover:text-main transition-all' >Programming</li>
    <li className='cursor-pointer hover:text-main transition-all' >Misc</li>
   {status ==='authenticated' &&  <li className='cursor-pointer hover:text-main transition-all' >My Account</li>}
  </>




  return (
    <div className='fixed w-full bg-stone-900 text-white z-50'>
      <div className="navbar max-w-7xl py-5 mx-auto ">

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
          {

            status === 'unauthenticated' ? <button onClick={() => setSigninVisibleFunc()} className=" px-7 py-1 transition-all font-semibold font-type border-main text-lg  bg-main hover:border-main border-2 text-black hover:bg-stone-900 cursor-pointer hover:text-white  ">LOGIN</button>

              :

              <button onClick={() => signOut()} className=" px-7 py-1 transition-all font-semibold font-type border-main text-lg  bg-main hover:border-main border-2 text-black hover:bg-stone-900 cursor-pointer hover:text-white  ">LOG OUT</button>




          }
        </div>

      </div>
    </div>
  );
};

export default Navbar;