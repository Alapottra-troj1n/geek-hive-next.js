import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AdminPendingPostViewer = ({setShowDetails, post}) => {
    
    console.log(post)


    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100  lg:w-1/3 w-full p-5 rounded-lg" >
            <div onClick={() => setShowDetails(false)} className="absolute top-1 right-2 font-semibold cursor-pointer text-black" >X</div>
            <div className="relative h-56   border">
                <Image layout="fill" src={post?.img} objectFit='cover' className="rounded-lg" alt='photo' /> 
            </div>

            <div className='py-4'>
                <h2 className="text-center text-3xl font-type font-black text-slate-800" >Title: {post?.title}</h2>
                <h3 className="text-center font-semibold text-slate-600 font-display ">Category : {post?.category}</h3>

                <p className="mt-10 text-lg text-slate-500 break-words" >{post?.desc}</p>
            </div>

        </div>
    );
};

export default AdminPendingPostViewer;