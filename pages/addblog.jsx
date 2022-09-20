import React, { useState } from 'react';

const Addblog = () => {

    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');


    

    const handleAddBlog = (e) => {
        e.preventDefault();

        const blog = {
            title: e.target.postTitle.value,
            imgUrl: e.target.imgUrl.value,
            category: category,
            content: content,
        }

        console.log(blog);
    }


    return (
        <div className='py-36'>

            <h2 className='text-center font-type text-4xl font-black' >CREATE A BLOGPOST</h2>




            <div>
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
                        <select value={category} onChange={e => setCategory(e.target.value)}className="select w-full  bg-white">
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
                       <input type="submit" value="ADD BLOG" />
                    </div>


                    



                </form>


            </div>


        </div>
    );
};

export default Addblog;