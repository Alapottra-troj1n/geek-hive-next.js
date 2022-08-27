import Image from 'next/image';
import React from 'react';

const BlogPost = () => {
  return (
    <div className="flex flex-col gap-2 p-5" >
    <div className=" flex justify-center ">
    <div className="relative h-72 w-72" >
          <Image alt='' src={'/ala.jpg'} layout="fill" objectFit='cover' />
          <div className='font-type  absolute bg-white p-3' >
            <h2 className='text-4xl font-black text-slate-800' >14</h2>
            <p className='text-slate-800 font-bold' >DEC 2022</p>
          </div>
        </div>
    </div>

     <div className="flex flex-col items-center lg:items-start">
     <p>Virtual by Jessy Howls</p>
      <h2 className="font-type font-bold text-2xl hover:text-main cursor-pointer transition-all" >MOBILE GAMING IS FUTURE</h2>
     </div>

    </div>
  );
};

export default BlogPost;