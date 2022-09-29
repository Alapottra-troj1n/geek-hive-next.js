import { getSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import DeletePromt from '../components/DeletePromt';
import PostCard from '../components/PostCard';
import connectDb from '../lib/connectDb';

const Manage = ({posts}) => {
    const [data,setData] = useState(posts);
    const [deletePromt, setDeletePromt] = useState(false);
    const [postDelete, setPostDelete] = useState(null);

   

    return (
        <div className='py-36 px-5 lg:px-0' >
            <h2 className='text-center font-type font-black text-2xl lg:text-4xl pb-28' >MANAGE POSTS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto place-items-center gap-10'>
            {data ? data?.map(post => <PostCard setDeletePromt={setDeletePromt} setPostDelete={setPostDelete} key={post.id} data={post} />) : <p className='text-center' >No Posts Found</p>}
            </div>
            {deletePromt && <DeletePromt data={data} setData={setData} setDeletePromt={setDeletePromt} postDelete={postDelete} />}
        </div>
    );
};

export default Manage;





export async function getServerSideProps(context) {

    const data = await getSession(context);

    const userName = data?.user?.name;

    const db = await connectDb();
    const userPosts = await db.collection("blogposts").find({author: userName}).toArray();
  
  
  
    return {
      props: {posts : JSON.parse(JSON.stringify(userPosts))},
       // will be passed to the page component as props
    }


  }