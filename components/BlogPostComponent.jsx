import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogPost = ({post}) => {
  return (
    <div className="flex flex-col gap-2 p-5" >
    <div className=" flex justify-center ">
    <div className="relative h-72 w-full" >
          <Image alt='' src={post?.img || '/placeholderpost.gif'} layout="fill" objectFit='cover' />
          <div className='font-type  absolute bg-slate-600 p-3' >
            <h2 className='text-4xl font-black text-white' >14</h2>
            <p className='text-white font-bold' >DEC 2022</p>
          </div>
        </div>
    </div>

     <div className="flex flex-col items-center lg:items-start">
     <p className='text-sm lg:text-lg' >Virtual by {post.author}</p>
      <Link href={`post/${post._id}`} ><h2 className="font-type font-bold text-lg lg:text-2xl hover:text-main cursor-pointer transition-all" >{post.title}</h2></Link>
     </div>

    </div>
  );
};

export default BlogPost;