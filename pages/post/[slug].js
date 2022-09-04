import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BlogPostComponent from '../../components/BlogPostComponent'
import connectDb from '../../lib/connectDb';

const SinglePost = ({data}) => {
    const router = useRouter();
    const {slug} = router.query;

    const [shuffledData,setShuffledData] = useState([])


    useEffect(() =>{

        const shuffled = [...data].sort(() => 0.5 - Math.random());
        console.log(shuffled);
    
        setShuffledData(shuffled);
    
    
    
      }
        ,[])


    return (
        <div>
            <div className="pt-28">

           <div className="flex justify-center">
           <div className="h-[500px] w-[450px] relative">
                <Image src={'/ala.jpg'} layout='fill' alt='' objectFit='cover' />
                <div className="absolute bottom-0 p-2 bg-slate-900 px-8 font-type text-xl font-black text-white">
                    GAMING
                </div>
            </div>
           </div>

           {/* text area */}

           <div className="max-w-7xl  mx-auto py-10 " >
                <h2 className="font-type font-black text-5xl text-white" >MLBB IS CURRENTLY DOMINATING MOBILE MARKET</h2>
                <p>14. Dec by Jessy Howls</p>

                <div className="py-14 text-2xl">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus voluptatum pariatur aliquid deserunt perferendis explicabo consequatur dicta maxime animi. Minima quo reiciendis provident iste. Fuga vel culpa iure totam, assumenda consequatur. Tempora at laudantium temporibus obcaecati molestiae error rerum? Aliquam nostrum impedit omnis enim a ex fuga consectetur quae modi, officia quibusdam eaque accusantium, nobis deleniti cupiditate? Corrupti reiciendis magnam eveniet doloremque! Fugiat natus obcaecati at necessitatibus explicabo animi illo ipsum. Pariatur odio non nostrum veniam at. Odio cupiditate aliquam facilis et temporibus. Delectus doloremque dolorum temporibus natus sed libero nulla, pariatur eos harum possimus, est fuga fugit veniam minus id quas non unde facilis molestiae sunt commodi! Rem dolorem in ab mollitia, at, asperiores minima veritatis rerum recusandae necessitatibus eos expedita architecto vero repudiandae veniam vitae atque velit quidem inventore. Et sequi unde eaque architecto sunt alias saepe officia nam consectetur, corrupti doloremque, assumenda minus aperiam odit est reprehenderit recusandae deleniti nostrum at. Nihil perferendis optio, necessitatibus magni ducimus quisquam et harum dicta inventore! Ea ab asperiores, ad esse quidem expedita? Enim delectus mollitia corporis accusamus sequi molestias, incidunt sunt veniam blanditiis, repellat eaque minima deleniti exercitationem maxime dicta harum quas quisquam quasi? Vitae explicabo nemo voluptatibus esse.</p>
                </div>

                <div className='flex items-center gap-2'>
                    <span className="font-type text-md font-black" >TAGS :</span> 
                    <div>
                    <span className="underline cursor-pointer text-md" >Gaming , </span>
                    <span className="underline cursor-pointer text-md" >MLBB</span>
                    </div>
                </div>

                {/* AUTHOR */}
                <div className='py-20'>

                    <div className='bg-slate-600 max-w-2xl grid grid-cols-2'>
                        <div className='h-60 relative'>
                        <Image src={'/ala.jpg'} layout='fill' objectFit='cover' />
                        <div className='absolute top-0 px-9 py-2 bg-slate-800 text-white font-type font-black ' >AUTHOR</div>
                        </div>
                        <div className='flex justify-center items-center flex-col text-center text-white px-5'>
                            <h2 className='font-display text-2xl font-bold tracking-wide' >ALAPOTTRA CHAKMA</h2>
                            <small className=' py-2 text-left' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nisi.</small>
                            <button className=" px-7 mt-5 transition-all font-semibold font-type border-main text-lg  bg-main hover:border-main border-2 text-black hover:bg-stone-900 cursor-pointer hover:text-white  ">CONTACT</button>
                        </div>
                    </div>

                </div>


            {/* MORE EXTRA */}


            <div>
                    <div className="bg-main inline-block p-3 mt-20 mb-5">
                        <h2 className='font-type font-black text-black text-xl' >ARTICLES YOU MIGHT LIKE</h2>
                    </div>


                   <div className="grid grid-cols-4">
                   {shuffledData.slice(0,4).map(post => <BlogPostComponent key={post._id} post={post} />)}
                   </div>

            </div>






           </div>


            </div>
        </div>
    );
};







export async function getServerSideProps(context) {


    const db = await connectDb();
    const allPosts = await db.collection("blogposts").find({}).toArray();
    console.log(allPosts);
  
  
  
    return {
      props: {data : JSON.parse(JSON.stringify(allPosts))}, // will be passed to the page component as props
    }
  }












export default SinglePost;