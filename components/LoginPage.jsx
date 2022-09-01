import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const LoginPage = ({setSigninVisible}) => {

    const [page, setPage] = useState('signin')


    const signIn = (e) => {
        e.preventDefault();
    }

    const signUp = (e) => {
        e.preventDefault();
    }








    if (page === 'signup') {

        return (
            <>

                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" >

                    <div className="p-16 bg-slate-700 border-2 border-main">
                        <div className="absolute top-2 right-3" ><AiOutlineClose onClick={() => setSigninVisible(false)} className="text-main text-xl cursor-pointer " /></div>
                        <div>
                            <h2 className='font-type font-black text-center pb-7 text-3xl' >SIGN UP</h2>
                        </div>
                        <form onSubmit={signUp} className="flex flex-col w-80 gap-4">

                            <input type="email" placeholder="Email" name='signup-email' className="input w-full border-2 focus:border-main bg-white" />
                            <input type="text" placeholder="Username" name='signup-username' className="input w-full border-2 focus:border-main bg-white" />
                           <div>
                           <input type="password"  placeholder="Password" name='signup-password' className="input w-full border-2 focus:border-main bg-white" />
                           </div>
                            <input type="password" placeholder="Confirm Password" name='signup-confirmpassword' className="input w-full border-2 focus:border-main bg-white" />
                            <input type="submit" value="SIGN UP" className='px-2 cursor-pointer bg-main font-type font-black py-3 text-black rounded-lg' />

                        </form>
                        <div className="pt-2">
                            <h2 className='font-display font-bold'>Already Have an Account ? <span onClick={() => setPage('signin')} className='text-white cursor-pointer hover:text-main transition' >Sign in</span> </h2>
                        </div>

                    </div>

                </div>

            </>

        )
    }



    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" >

            <div className="p-16 bg-slate-700 border-2 border-main">
                <div className="absolute top-2 right-3" ><AiOutlineClose onClick={() => setSigninVisible(false)} className="text-main text-xl cursor-pointer " /></div>
                <div>
                    <h2 className='font-type font-black text-center pb-7 text-3xl' >SIGN IN</h2>
                </div>
                <form onSubmit={signIn} className="flex flex-col w-80 gap-4">

                    <input type="email" placeholder="Email" name='login-email' className="input w-full border-2 focus:border-main bg-white" />
                    <input type="password" placeholder="Password" name='login-password' className="input w-full border-2 focus:border-main bg-white" />
                    <input type="submit" value="LOGIN" className='px-2 bg-main font-type font-black py-3 text-black rounded-lg cursor-pointer' />

                </form>
                <div className="pt-2">
                    <h2 className='font-display font-bold'>New to Geek Hive ? <span onClick={() => setPage('signup')} className='text-white cursor-pointer hover:text-main transition' >Create a Account</span> </h2>
                </div>

            </div>

        </div>
    );
};

export default LoginPage;