import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import connectDb from '../../lib/connectDb';
var ObjectId = require('mongodb').ObjectID;
const EditPost = ({ post }) => {

    const router = useRouter()
    const [category, setCategory] = useState(post.category);
    const [content, setContent] = useState(post.desc);

    const { data, status } = useSession();

    const author = data.user.name;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const settings = {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: e.target.postTitle.value,
                img: e.target.imgUrl.value,
                tags: e.target.tags.value,
                category: category,
                desc: content,
                author: author
            })
        };

        const res = await fetch(`http://localhost:3000/api/updatePost?id=${post._id}`, settings);
        const resData = await res.json();

        console.log(resData);
        if (resData.success) {

            toast.success('Post Update Successfully!');


        }



    }

    return (
        <div className='py-36 max-w-7xl mx-auto'>



            <h2 className='font-type text-3xl font-black text-center uppercase' >UPDATE {post.title}</h2>




            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-10 gap-3'>

                <div className='w-96'>
                    <label className='font-display text-lg font-bold' >Post Title</label>
                    <input defaultValue={post.title} type="text" placeholder="Top 5 Programming Langueages" name='postTitle' className="input bg-white input-bordered w-full " />
                </div>

                <div className='w-96'>
                    <label className='font-display text-lg font-bold' >Image Url (please use ImgBb)</label>
                    <input defaultValue={post.img} type="text" name='imgUrl' placeholder="https://i.ibb.co/1vd2zLq/chartjs-homepage.jpg" className="input bg-white input-bordered w-full " />
                </div>



                <div className='w-96'>
                    <label className='font-display text-lg font-bold' >Select a Category</label>
                    <select defaultValue={post.category} value={category} onChange={e => setCategory(e.target.value)} className="select w-full  bg-white">
                        <option disabled selected>Select Category</option>
                        <option>programming</option>
                        <option>gaming</option>
                        <option>misc</option>
                    </select>
                </div>

                <div className='w-96'>
                    <label className='font-display text-lg font-bold' >Tags</label>
                    <input defaultValue={post.tags} type="text" name='tags' placeholder="gaming apex legends bloging" className="input bg-white input-bordered w-full " />
                </div>


                <div className='w-96'>
                    <label className='font-display text-lg font-bold' >Content</label>
                    <textarea defaultValue={post.desc} onChange={e => setContent(e.target.value)} placeholder="" className="input h-40 bg-white input-bordered w-full " />
                </div>

                <div className='w-96'>
                    <input type="submit" className="btn" value="UPDATE BLOG" />
                </div>






            </form>


        </div>
    );
};

export default EditPost;




export async function getServerSideProps(context) {
    const { id } = context.params;

    const db = await connectDb();
    const post = await db.collection('blogposts').findOne({ _id: ObjectId(id) });

    console.log(post)


    return {
        props: { post: JSON.parse(JSON.stringify(post)) }, // will be passed to the page component as props
    }
}