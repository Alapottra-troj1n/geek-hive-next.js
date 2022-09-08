import Image from 'next/image';
import { useRouter } from 'next/router';
import connectDb from '../../lib/connectDb';
import BlogPostComponent from '../../components/BlogPostComponent'
const { ObjectId } = require("mongodb");

const SinglePost = ({data, random}) => {
    const router = useRouter();
    const {id} = router.query;
    const timestamp = data[0]._id.toString().substring(0,8);
    const date = new Date( parseInt( timestamp, 16 ) * 1000 );
    console.log(random);


    return (
        <div>
            <div className="pt-28">

           <div className="flex justify-center">
           <div className="h-[500px] w-[450px] relative">
                <Image src={data[0].img} layout='fill' alt='' objectFit='cover' />
                <div className="absolute bottom-0 p-2 bg-slate-900 px-8 font-type text-xl font-black text-white">
                    {data[0].category}
                </div>
            </div>
           </div>

           {/* text area */}

           <div className="max-w-7xl  mx-auto py-10 " >
                <h2 className="font-type font-black text-5xl text-white" >{data[0].title}</h2>
                <p>{date.toString().slice(3,15)} by {data[0].author}</p>

                <div className="py-14 text-2xl">
                    <p>{data[0].desc}</p>
                </div>

                <div className='flex items-center gap-2'>
                    <span className="font-type text-md font-black" >TAGS :</span> 
                    <div>
                    {data[0].tags.map(tag => <span key={tag} > {tag}</span> )}
                    </div>
                </div>

                {/* AUTHOR */}
                <div className='py-20'>

                    <div className='bg-slate-600 max-w-2xl grid grid-cols-2'>
                        <div className='h-60 relative'>
                        <Image src={data[0].authorImg || `https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg` } layout='fill' alt='' objectFit='cover' />
                        <div className='absolute top-0 px-9 py-2 bg-slate-800 text-white font-type font-black ' >AUTHOR</div>
                        </div>
                        <div className='flex justify-center items-center flex-col text-center text-white px-5'>
                            <h2 className='font-display text-2xl font-bold tracking-wide' >{data[0].author}</h2>
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
                            {random.map( post => <BlogPostComponent key={post._id} post={post} />   )}
                   </div>

            </div>






           </div>


            </div>
        </div>
    );
};


export default SinglePost;

export async function getStaticPaths() {
        const db = await connectDb();
        const allPosts = await db.collection('blogposts').find({}).toArray();

        const paths = allPosts.map(post => {
            return {params: {
                id: post._id.toString()
            }}
        })

        



    return {
      paths,
      fallback: 'blocking', // can also be true or 'blocking'



    }
  }





export async function getStaticProps(context) {

   

    const {id} = context.params;

 
        const db = await connectDb();
        const post = await db.collection('blogposts').find({_id: ObjectId(id)}).toArray();

        

        const random = await db.collection('blogposts').aggregate([{$sample: {size: 4}}]).toArray();
        console.log(random)
      

        if (!post) {
            return {
              notFound: true,
            };
          }


  

    return {
      props: {data : JSON.parse(JSON.stringify(post)), random : JSON.parse(JSON.stringify(random))},
       // will be passed to the page component as props
       revalidate:18000,
    }
  }

  //Incremental Static Regeneration