import Head from 'next/head'
import BlogPost from './components/blogPost'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Geek Hive</title>
        <meta name="description" content="My personal blog about gaming and programming" />
      </Head>


      <div style={{ background: 'linear-gradient(0deg, rgba(44, 44, 44, 0.52), rgba(49, 49, 49, 0.475)), url(/bg-hero.jpg)' }} >

        <div className="h-screen grid grid-cols-[60%,40%] items-center mx-auto bg-cover bg-center max-w-7xl" >
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
      <h2 className="text-center font-type font-black text-2xl pb-10 pt-20 " >RECENT POSTS</h2>

        <div className="pb-20 grid grid-cols-4 items-center max-w-7xl mx-auto ">

          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />



        </div>
      </div>


      <div className="py-20 bg-white ">

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-auto" >

          <div className='flex justify-center'>
            <span className="font-extrabold text-md bg-slate-800 px-6 py-1 text-main font-type">GAMING </span>

          </div>

          <div className='flex justify-center'>
            <span className=" font-extrabold text-md bg-slate-800 px-6 py-1 text-main font-type">PROGRAMMING</span>

          </div>

          <div className='flex justify-center'>
            <span className=" font-extrabold text-md bg-slate-800 px-6 py-1 text-main font-type">MISC</span>

          </div>



        </div>


      </div>







    </div>
  )
}
