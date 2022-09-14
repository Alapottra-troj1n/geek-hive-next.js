import Image from 'next/image';
import React from 'react';
import BlogPost from '../components/BlogPostComponent';
import connectDb from '../lib/connectDb';

const Programming = ({data}) => {
    console.log(data)
    return (
        <div className="pt-20  mx-auto">
            <div className="relative h-80" >
           
                <Image src={'/bg-hero.jpg'} layout='fill' objectFit='cover' alt='' />
                <h2 className="text-white text-center font-type font-black text-4xl tracking-wider absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >PROGRAMMING SECTION</h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-3 py-10">
                        {data.map(post => <BlogPost post={post} key={post._id} /> )}
            </div>

        </div>
    );
};

export default Programming;




export async function getStaticProps(context) {

   


 
        const db = await connectDb();
        const programmingPost = await db.collection('blogposts').find({category: 'programming'}).toArray();

    
      


  

    return {
      props: {data : JSON.parse(JSON.stringify(programmingPost))},
       // will be passed to the page component as props
       revalidate:18000,
    }
  }