import { getSession } from 'next-auth/react';
import React from 'react';
import PostCard from '../components/PostCard';
import connectDb from '../lib/connectDb';

const Manage = ({data}) => {
    console.log(data)
    return (
        <div className=' py-36' >
            <h2 className='text-center font-type font-black text-4xl pb-28' >MANAGE POSTS</h2>
            <div className='grid grid-cols-3 max-w-7xl mx-auto'>
            {data ? data?.map(post => <PostCard key={post.id} data={post} />) : <p className='text-center' >No Posts Found</p>}
            </div>
            
        </div>
    );
};

export default Manage;





export async function getServerSideProps(context) {

    const data = await getSession(context);

    const userName = data.user.name;

    const db = await connectDb();
    const userPosts = await db.collection("blogposts").find({author: userName}).toArray();
  
  
  
    return {
      props: {data : JSON.parse(JSON.stringify(userPosts))},
       // will be passed to the page component as props
    }


  }