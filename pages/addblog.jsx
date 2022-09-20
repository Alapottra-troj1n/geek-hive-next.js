import React, { useState } from 'react';
import Image from 'next/image';
const Addblog = () => {

    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');




    const handleAddBlog = async (e) => {
        e.preventDefault();




        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: e.target.postTitle.value,
                imgUrl: e.target.imgUrl.value,
                tags: e.target.tags.value,
                category: category,
                content: content
            })
        };

        const res = await fetch('http://localhost:3000/api/addblog', settings);
        const data = await res.json();

        console.log(data);

    }


    return (
        <div className='py-36 '>





            <h2 className='text-center font-type text-4xl font-black' >CREATE A BLOGPOST</h2>

            <div className='grid grid-cols-[50%,50%] my-24' >
                <div className='flex justify-center items-center'>
                    <div className='relative w-96 h-96'>
                        <Image src={'/saly.png'} layout='fill' objectFit='cover' alt='' />
                    </div>
                </div>



                <div className='flex justify-start'>
                    <form onSubmit={handleAddBlog} className='flex flex-col justify-center items-center mt-10 gap-3'>

                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Post Title</label>
                            <input type="text" placeholder="Top 5 Programming Langueages" name='postTitle' className="input bg-white input-bordered w-full " />
                        </div>

                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Image Url</label>
                            <input type="text" name='imgUrl' placeholder="https://i.ibb.co/1vd2zLq/chartjs-homepage.jpg" className="input bg-white input-bordered w-full " />
                        </div>



                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Select a Category</label>
                            <select value={category} onChange={e => setCategory(e.target.value)} className="select w-full  bg-white">
                                <option disabled selected>Select Category</option>
                                <option>programming</option>
                                <option>gaming</option>
                                <option>misc</option>
                            </select>
                        </div>

                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Tags</label>
                            <input type="text" name='tags' placeholder="gaming, apex legends, bloging" className="input bg-white input-bordered w-full " />
                        </div>


                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Content</label>
                            <textarea onChange={e => setContent(e.target.value)} placeholder="" className="input h-40 bg-white input-bordered w-full " />
                        </div>

                        <div className='w-96'>
                            <input type="submit" className="btn" value="ADD BLOG" />
                        </div>






                    </form>


                </div>
            </div>

        </div>
    );
};

export default Addblog;