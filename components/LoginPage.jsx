import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { signIn, useSession } from 'next-auth/react';
import Spinner from './Spinner';
import { BsGithub } from 'react-icons/bs';
const LoginPage = ({ setSigninVisible }) => {

    const [page, setPage] = useState('signin');

    const [error, setError] = useState('');

    const [processing, setProcessing] = useState(false);




    if (processing) {

        return (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" >
                <Spinner />
            </div>
        )
    }


    const signInWithGithub = (e) => {
        e.preventDefault();

        signIn('github', {
            callbackUrl: 'https://geek-hive-next-js.vercel.app/'
        })

    }



    const handleSignIn = async (e) => {
        e.preventDefault();
        setProcessing(true)
        const email = e.target.loginEmail.value;
        const pass = e.target.loginPassword.value;
        const res = await signIn('credentials', {
            email: email,
            password: pass,
            redirect: false
        })
        if (res.error) {
            console.log(res)
            setError(res.error);
            setProcessing(false);
        }
        if (res.ok) {
            setProcessing(false);
            setError('')
            setSigninVisible(false)

        }
        //if res.ok == true that's mean all good.. if its false there will be a res.error with the error message;




    }



    const handleSignUp = async (e) => {
        setProcessing(true);
        e.preventDefault();

        const signupEmail = e.target.signupEmail.value;
        const signupUsername = e.target.signupUsername.value;
        const signupPassword = e.target.signupPassword.value;
        const signupConfirmPassword = e.target.signupConfirmPassword.value;

        if (signupPassword !== signupConfirmPassword) {
            setError('Passwords do not match');
            setProcessing(false);
            return;

        }

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: signupEmail, password: signupPassword, username: signupUsername })
        };

        try {
            const res = await fetch('https://geek-hive-next-js.vercel.app/api/signup', settings);
            const data = await res.json();

            console.log(data);

            if (data.success) {

                const res = await signIn('credentials', {
                    email: signupEmail,
                    password: signupPassword,
                    redirect: true
                })
                setProcessing(false);
                //if user exists
                setError('');

            }

            setProcessing(false);
            setError('');

        } catch (err) {
            setError(err.message);
            setProcessing(false);
        }




    }








    if (page === 'signup') {

        return (
            <>

                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" >

                    <div className="p-8 lg:p-16 bg-slate-700 border-2 border-main">
                        <div className="absolute top-2 right-3" ><AiOutlineClose onClick={() => setSigninVisible(false)} className="text-main text-xl cursor-pointer " /></div>
                        <div>
                            <h2 className='font-type font-black text-center pb-7 text-3xl' >SIGN UP</h2>
                        </div>
                        <form onSubmit={handleSignUp} className="flex flex-col w-80 gap-4">

                            <input type="email" placeholder="Email" name='signupEmail' className="input w-full border-2 focus:border-main bg-white" />
                            <input type="text" placeholder="Username" name='signupUsername' className="input w-full border-2 focus:border-main bg-white" />
                            <div>
                                <input type="password" placeholder="Password" name='signupPassword' className="input w-full border-2 focus:border-main bg-white" />
                            </div>
                            <input type="password" placeholder="Confirm Password" name='signupConfirmPassword' className="input w-full border-2 focus:border-main bg-white" />
                            <input type="submit" disabled={processing ? true : false} value="SIGN UP" className='px-2 cursor-pointer bg-main font-type font-black py-3 text-black rounded-lg' />

                        </form>
                        <div className="pt-2">
                            <p className="text-center text-red-500">{error}</p>
                            <h2 className='font-display font-bold'>Already Have an Account ? <span onClick={() => setPage('signin')} className='text-white cursor-pointer hover:text-main transition' >Sign in</span> </h2>
                        </div>

                    </div>

                </div>

            </>

        )
    }



    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" >

            <div className="p-8 lg:p-16 bg-slate-700 border-2 border-main">
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
                    <p className="text-center text-red-500">{error}</p>
                    <h2 className='font-display font-bold'>New to Geek Hive ? <span onClick={() => setPage('signup')} className='text-white cursor-pointer hover:text-main transition' >Create a Account</span> </h2>
                </div>



                <div className='py-3 mt-5 rounded-lg cursor-pointer font-semibold text-black font-display text-md flex justify-center items-center gap-2 bg-main text-center'>
                    <button  onClick={signInWithGithub}>Continue with Github  </button>  <BsGithub className='text-xl' />
                </div>

            </div>

        </div>
    );
};

export default LoginPage;