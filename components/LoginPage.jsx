import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import {signIn, useSession} from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

const LoginPage = ({setSigninVisible}) => {

    const [page, setPage] = useState('signin');

    

  


    const signInWithGithub = (e) => {
        e.preventDefault();

        signIn('github', {
            callbackUrl: 'http://localhost:3000/'
        } )

    }

    const signUp = (e) => {
        e.preventDefault();
    
    }

    const handleSignIn = async(e) => {
        e.preventDefault();
        const email = e.target.loginEmail.value;
        const pass = e.target.loginPassword.value;
        const res = await signIn('credentials', {
            email: email,
            password: pass,
            redirect: false
        })

        console.log(res)
    }



    const handleSignUp = async(e) => {

        e.preventDefault();

        const signupEmail = e.target.signupEmail.value;
        const signupUsername = e.target.signupUsername.value;
        const signupPassword = e.target.signupPassword.value;
        const signupConfirmPassword = e.target.signupConfirmPassword.value;

        






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
                        <form onSubmit={handleSignUp} className="flex flex-col w-80 gap-4">

                            <input type="email" placeholder="Email" name='signupEmail' className="input w-full border-2 focus:border-main bg-white" />
                            <input type="text" placeholder="Username" name='signupUsername' className="input w-full border-2 focus:border-main bg-white" />
                           <div>
                           <input type="password"  placeholder="Password" name='signupPassword' className="input w-full border-2 focus:border-main bg-white" />
                           </div>
                            <input type="password" placeholder="Confirm Password" name='signupConfirmPassword' className="input w-full border-2 focus:border-main bg-white" />
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
                <form onSubmit={handleSignIn} className="flex flex-col w-80 gap-4">

                    <input type="email" placeholder="Email" name='loginEmail' className="input w-full border-2 focus:border-main bg-white" />
                    <input type="password" placeholder="Password" name='loginPassword' className="input w-full border-2 focus:border-main bg-white" />
                    <input type="submit" value="LOGIN" className='px-2 bg-main font-type font-black py-3 text-black rounded-lg cursor-pointer' />

                </form>
                <div className="pt-2">
                    <h2 className='font-display font-bold'>New to Geek Hive ? <span onClick={() => setPage('signup')} className='text-white cursor-pointer hover:text-main transition' >Create a Account</span> </h2>
                </div>

            

                <div className='mt-3 text-center'>
                    <button onClick={signInWithGithub}>Sign In with Github</button>
                </div>

            </div>

        </div>
    );
};

export default LoginPage;