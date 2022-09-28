import Head from 'next/head';

import { useEffect, useState } from 'react';
import BlogPostComponent from '../components/BlogPostComponent';
import LoginPage from '../components/LoginPage';
import SmallPost from '../components/SmallPost'
import connectDb from '../lib/connectDb';


export default function Home({ data }) {

  const [shuffledData, setShuffledData] = useState([])

  const gamingPosts = data.filter(post => post.category === 'gaming');
  const programmingPosts = data.filter(post => post.category === 'programming');
  const miscPosts = data.filter(post => post.category === 'misc');



  useEffect(() =>{

    const shuffled = [...data].sort(() => 0.5 - Math.random());

    setShuffledData(shuffled);



  }
    ,[data])
 

  return (
    <div >
      <Head>
        <title>Geek Hive</title>
        <meta name="description" content="My personal blog about gaming and programming" />
      </Head>


      <div style={{ background: 'linear-gradient(0deg, rgba(44, 44, 44, 0.52), rgba(49, 49, 49, 0.475)), url(/bg-hero.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' , backgroundPosition: 'center center'}} >

        <div className="h-screen grid grid-cols-[60%,40%] items-center mx-auto max-w-7xl " >
          <div className="flex flex-col justify-center items-start font-type">
            <h2 className=" font-extrabold text-xl bg-white px-4 text-gray-800">GAMING AND CODING</h2>
            <h2 className="font-black  text-4xl text-white mt-2  leading-snug">THOUGHTS RELATED TO CODING AND GAMING</h2>
            <p className='font-display text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit necessitatibus suscipit aperiam aliquid fugiat enim ea nisi aliquam quos.</p>
          </div>

          <div className="flex p-8 justify-center items-center">
            {/* <Image src={'/ala.jpg'} width={1090} height={1440} alt='ala photo'/> */}
          </div>

        </div>


      </div>



      <div>
        {/* LOGIN */}


      </div>





      <div>
        <h2 className="text-center font-type font-black text-2xl pb-10 pt-20 " >POPULAR POSTS</h2>

        <div className="pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto gap-10">

        {shuffledData?.slice(0,4).map(post => <BlogPostComponent post={post} key={post._id} />)}



        </div>
      </div>


      <div className="py-20 bg-white ">

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  max-w-7xl  mx-auto" >

          <div className='flex flex-col items-center justify-center'>
            <span className="font-extrabold text-md bg-slate-800 px-6 py-1 text-main font-type">GAMING </span>


           {gamingPosts?.slice(0,3).map(post => <SmallPost postData={post} key={post._id} />  )}


          </div>

          <div className='flex flex-col items-center  justify-center'>
            <span className=" font-extrabold text-md bg-slate-800 px-6 py-1 text-main font-type">PROGRAMMING</span>
            {programmingPosts?.slice(0,3).map(post => <SmallPost postData={post} key={post._id} />  )}
          </div>

          <div className='flex flex-col items-center  justify-center'>
            <span className=" font-extrabold text-md bg-slate-800 px-6 py-1 text-main font-type">MISC</span>
            {miscPosts?.slice(0,3).map(post => <SmallPost postData={post} key={post._id} />  )}
          </div>



        </div>


      </div>







    </div>
  )
}


export async function getStaticProps(context) {


  const db = await connectDb();
  const allPosts = await db.collection("blogposts").find({}).toArray();



  return {
    props: {data : JSON.parse(JSON.stringify(allPosts))},
    revalidate:18000, // will be passed to the page component as props
  }
}