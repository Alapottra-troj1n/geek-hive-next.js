import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BlogPostComponent from '../components/BlogPostComponent';
import SmallPost from '../components/SmallPost'
import Spinner from '../components/Spinner';
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

        <div className="pt-60 pb-40 px-5 lg:h-screen lg:p-0 grid grid-cols-1 lg:grid-cols-[60%,40%] items-center mx-auto max-w-7xl " >
          <div className="flex flex-col justify-center items-start font-type">
            <h2 className=" font-extrabold text-md lg:text-xl bg-white px-4 text-gray-800 whitespace-nowrap">GAMING AND CODING</h2>
            <h2 className="font-black text-xl lg:text-4xl text-white mt-2 leading-7">THOUGHTS RELATED TO CODING AND GAMING</h2>
            <p className='font-display text-sm lg:text-lg text-white mt-2'>Everything you ever wanted to know about Gaming, Tech and Programming.</p>
          </div>

          <div className="flex p-8 justify-center items-center">
            {/* <Image src={'/ala.jpg'} width={1090} height={1440} alt='ala photo'/> */}
          </div>

        </div>


      </div>



      <div>
        {/* LOGIN */}


      </div>





      <div className='px-5 lg:p-0' >
        <h2 className="text-center font-type font-black py-16  lg:pb-10 lg:pt-20 text-2xl " >POPULAR POSTS</h2>

        <div className="pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto gap-10">

        {shuffledData?.slice(0,4).map(post => <BlogPostComponent post={post} key={post._id} />)}



        </div>
      </div>


      <div className="py-20 bg-white ">

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  max-w-7xl  mx-auto" >
          <div className='flex flex-col items-center justify-center'>
            <span className="font-extrabold text-md bg-slate-800 px-6 text-main font-type w-full text-center md:w-auto  py-2">GAMING </span>


           {gamingPosts?.slice(0,3).map(post => <SmallPost postData={post} key={post._id} />  )}


          </div>

          <div className='flex flex-col items-center mt-40  justify-center md:mt-0'>
            <span className=" font-extrabold text-md bg-slate-800 px-6 text-main font-type w-full text-center md:w-auto py-2">PROGRAMMING</span>
            {programmingPosts?.slice(0,3).map(post => <SmallPost postData={post} key={post._id} />  )}
          </div>

          <div className='flex flex-col items-center mt-40  justify-center md:mt-0'>
            <span className=" font-extrabold text-md bg-slate-800 px-6 text-main font-type w-full text-center md:w-auto py-2">MISC</span>
            {miscPosts?.slice(0,3).map(post => <SmallPost postData={post} key={post._id} />  )}
          </div>



        </div>


      </div>





      <div className='px-5 py-10 lg:py-24 lg:px-0 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10'>

            <div>
              <h2 className='font-type font-black text-2xl lg:text-4xl text-white' >STAY CURIOUS.</h2>
              <h2 className='font-display lg:text-xl mt-2' >We are still not sure how we got here, but we are excited about where we are going</h2>
            </div>

            <div className='relative lg:h-[500px] lg:w-[800px] h-80 w-80' >

              <Image src="/person3.png" objectFit='cover' layout='fill'  alt="" />


            </div>


      </div>







    </div>
  )
}


export async function getStaticProps(context) {


  const db = await connectDb();
  const allPosts = await db.collection("blogposts").find({pending: false}).toArray();



  return {
    props: {data : JSON.parse(JSON.stringify(allPosts))},
    revalidate:60, // will be passed to the page component as props
  }
}