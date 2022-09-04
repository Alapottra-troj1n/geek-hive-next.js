import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const smallPost = ({postData}) => {

    return (
        <div className="bg-white mt-5 grid grid-cols-1 lg:grid-cols-2 items-center p-3 ">
            <div className="relative h-44 w-44 " >
                <Image src={postData.img} alt='' layout='fill' objectFit='cover'  />
            </div>
            <div>
            <p className="font-display text-sm text-slate-500" >14 Dec / by {postData.author}</p>
            <Link href={'/post/this-is-a-post'}><h2 className="font-bold font-display max-w-lg leading-6 text-slate-700 text-lg hover:text-main cursor-pointer transition-all" >{postData.title.slice(0,30)}..</h2></Link>
            </div>
        </div>
    );
};

export default smallPost;