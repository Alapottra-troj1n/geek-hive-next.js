import Image from 'next/image';
import React from 'react';

const AdminPendingPostViewer = ({setShowDetails, post}) => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 h-80 w-80 p-5 rounded-lg" >
            <div onClick={() => setShowDetails(false)} className="absolute top-1 right-2 font-semibold cursor-pointer text-black" >X</div>
            <div className="relative h-40  ">
                <Image layout="fill" src={post.img} objectFit='cover' className="rounded-lg" alt='photo' /> 
            </div>
        </div>
    );
};

export default AdminPendingPostViewer;