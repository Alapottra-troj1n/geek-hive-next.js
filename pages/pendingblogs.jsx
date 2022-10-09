import { getSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import connectDb from '../lib/connectDb';

const PendingBlogs = ({ pendingPosts }) => {

    
    return (
        <div className='py-36 px-5 lg:px-0' >

            <h2 className='text-center font-type font-black text-2xl lg:text-4xl pb-28' >PENDING POSTS</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto place-items-center gap-10'>
                {pendingPosts?.map(post => <>

                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure className=" relative h-60 " ><Image layout="fill" objectFit='cover' alt='' src={post?.img} /></figure>
                     
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.desc.slice(0,100)}....</p>
                            <div className="card-actions justify-end">
                                <h2 className="font-semibold text-md text-red-400" >Pending For Approval</h2>
                            </div>
                        </div>
                    </div>

                </>)}
            </div>
        </div>
    );
};

export default PendingBlogs;

export async function getServerSideProps(context) {

    const data = await getSession(context);

    const username = data?.user?.name;

    const db = await connectDb();
    const pendingPosts = await db.collection("blogposts").find({ author: username, pending: true }).toArray();


    return {
        props: { pendingPosts: JSON.parse(JSON.stringify(pendingPosts)) },
    }
}