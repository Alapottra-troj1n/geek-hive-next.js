import React, { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
const Addblog = () => {

    const [category, setCategory] = useState('programming');
    const [content, setContent] = useState('');
    const {data, status} = useSession();
    const [imageUrl,setImageUrl] = useState(null);
    const [addingBlog, setAddingBlog] = useState(false)

    console.log(category);

   const author = data.user.name;

   const uploadFile = async(files) => {


    
        
            const formData = new FormData();
            formData.append('image', files[0])

       
            const settings = {
                method: 'POST',
                body: formData
            };

           try{
            const res = await fetch('https://api.imgbb.com/1/upload?expiration=600&key=e0134f6cff32253a16c40f0384a4000c', settings );

            const imageData =  await res.json();

            if(imageData.success){
                console.log(imageData)
                toast.success('image upload complete')
                setImageUrl(imageData.data.image.url)
               

            }
           }catch(err){
            console.log(err)
           }

   }


    const handleAddBlog = async (e) => {
        e.preventDefault();

        setAddingBlog(true)


        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: e.target.postTitle.value,
                img: imageUrl,
                tags: e.target.tags.value,
                category: category,
                desc: content,
                author: author,
                pending: true
            })
        };

        const res = await fetch('https://geek-hive-next-js.vercel.app/api/addblog', settings);
        const data = await res.json();

        if(data.success) {
            toast.success('Added blog successfully');
            e.target.reset();
            setAddingBlog(false);

        }
       

    }


    return (
        <div className='py-36 '>





            <h2 className='text-center font-type text-2xl lg:text-4xl font-black' >CREATE A BLOGPOST</h2>
           
            <div className='grid grid-cols-1 lg:grid-cols-[50%,50%] my-24' >
                <div className='flex justify-center items-center'>
                    <div className='relative w-[40vw] h-full'>
                        <Image src={'/saly.png'} layout='fill' objectFit='cover'  alt='' />
                    </div>
                </div>



                <div className='flex lg:justify-start justify-center'>
                    <form onSubmit={handleAddBlog} className='flex flex-col justify-center items-center mt-10 gap-3'>

                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Post Title</label>
                            <input type="text" placeholder="Top 5 Programming Langueages" name='postTitle' className="input bg-white input-bordered w-full " />
                        </div>


                        <div className='w-96'>
                            <label htmlFor='imageUpload' className='font-display text-lg font-bold cursor-pointer flex items-center gap-3' >
                                <img src="https://cdn-icons-png.flaticon.com/512/5460/5460486.png" className='w-12 my-2' alt="" />
                                <h2>Upload Image</h2>
                            </label>
                            <input type="file" name="imageFile" id="imageUpload" className='hidden' onChange={e => uploadFile(e.target.files) } />



                        </div>



                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Select a Category</label>
                            <select value={category} onChange={e => setCategory(e.target.value)} className="select w-full  bg-white">
                                <option disabled selected>Select Category</option>
                                <option>programming</option>
                                <option>gaming</option>
                                <option>misc</option>
                            </select>
                        </div>

                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Tags</label>
                            <input type="text" name='tags' placeholder="gaming apex legends bloging" className="input bg-white input-bordered w-full " />
                        </div>


                        <div className='w-96'>
                            <label className='font-display text-lg font-bold' >Content</label>
                            <textarea onChange={e => setContent(e.target.value)} placeholder="" className="input h-40 bg-white input-bordered w-full " />
                        </div>

                        <div className='w-96'>
                            <input type="submit" className="btn" value="ADD BLOG" disabled={imageUrl | !addingBlog ? false : true} />
                        </div>






                    </form>


                </div>
            </div>

        </div>
    );
};

export default Addblog;