import Image from 'next/image';
import React from 'react';

const BlogPost = () => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer" >
      <div>
        <div className="relative h-72 w-60" >
          <Image alt='' src={'/ala.jpg'} layout="fill" objectFit='cover' />
          <div className='font-type  absolute bg-white p-3' >
            <h2 className='text-4xl font-black text-slate-800' >14</h2>
            <p className='text-slate-800 font-bold' >DEC 2022</p>
          </div>
        </div>

      </div>
      <p>Virtual by Jessy Howls</p>
      <h2 className="font-type font-semibold text-2xl" >MOBILE GAMING IS FUTURE</h2>

    </div>
  );
};

export default BlogPost;