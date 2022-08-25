import React from 'react';

const BlogPost = () => {
    return (
        <div className="flex flex-col gap-2 cursor-pointer" >
        <div className="h-72 w-60 bg-[url('/ala.jpg')] bg-cover bg-center relative"  >
              <div className='font-type  absolute bg-white p-3' >
                <h2 className='text-4xl font-black text-slate-800' >14</h2>
                <p className='text-slate-800 font-bold' >DEC 2022</p>
              </div>
        </div>
        <p>Virtual by Jessy Howls</p>
        <h2 className="font-type font-semibold text-2xl" >SOCIAL MEDIA MARKETING</h2>

      </div>
    );
};

export default BlogPost;