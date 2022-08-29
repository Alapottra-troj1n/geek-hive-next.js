import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const SinglePost = () => {
    const router = useRouter();
    const {slug} = router.query;


    return (
        <div className="h-[80vh]">
            <div className="pt-28">

           <div className="flex justify-center">
           <div className="h-[500px] w-[450px] relative">
                <Image src={'/ala.jpg'} layout='fill' alt='' />
                <div className="absolute bottom-0 p-2 bg-slate-900 px-8 font-type text-xl font-black text-white">
                    GAMING
                </div>
            </div>
           </div>

           {/* text area */}

           <div className="max-w-7xl  mx-auto py-10 font-type font-black text-5xl text-white" >
                <h2>MLBB IS CURRENTLY DOMINATING MOBILE MARKET</h2>

           </div>


            </div>
        </div>
    );
};

export default SinglePost;