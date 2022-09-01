import React, { useState } from 'react';

const LoginPage = () => {

    const [page, setPage] = useState('login')





    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" >
            
            <div className="p-16 bg-slate-700 rounded border-2 border-main">
            <div className="absolute top-2 right-5" >X</div>
                <div>
                    <h2 className='font-type font-black text-center pb-7 text-3xl' >LOGIN</h2>
                </div>
                <form className="flex flex-col w-80 gap-4">

                    <input type="email" placeholder="Email" className="input w-full border-2 focus:border-main bg-white" />
                    <input type="password" placeholder="Password" className="input w-full border-2 focus:border-main bg-white" />


                </form>

            </div>

        </div>
    );
};

export default LoginPage;