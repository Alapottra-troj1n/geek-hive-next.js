import Image from 'next/image';
import React from 'react';

const smallPost = () => {
    return (
        <div className="bg-white mt-5 border flex flex-col lg:flex-row items-center gap-5 p-3">
            <div className="relative h-32 w-72 " >
                <Image src={'/ala.jpg'} alt='' layout='fill' objectFit='cover'  />
            </div>
            <div>
            <p className="font-display text-slate-500" >14 Dec / by Alapottra</p>
            <h2 className="font-bold font-display leading-6 text-slate-700 text-2xl" >MLBB IS NOW DOMINATING THE GAMING MARKET</h2>
            </div>
        </div>
    );
};

export default smallPost;