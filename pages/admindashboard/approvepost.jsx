import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import AdminPendingPostViewer from '../../components/AdminPendingPostViewer';
import DeletePromt from '../../components/DeletePromt';
import connectDb from '../../lib/connectDb';

const ApprovePost = ({ pendingPosts }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [deletePromt, setDeletePromt] = useState(false);
    const [data, setData] = useState(pendingPosts);

    const {data: currentUser} = useSession();

    const [singlePost, setSinglePost] = useState(null);



    const handleApprove = async(post) => {

        const settings = {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail : currentUser.user.email
            })
        };

        const res = await fetch(`https://geek-hive-next-js.vercel.app/api/acceptpending?id=${post._id}`, settings);
        const d = await res.json();
       
        if(d.success){
            let filteredArray = data.filter(item => item._id !== post._id);
             
            setData(filteredArray)
            toast.success('Blogpost approved successfully')

        }



    }



  
    return (
        <div className="py-36">







            <h2 className="text-center text-3xl font-type uppercase font-black" >Pending Posts - Admin</h2>






            <div className="lg:max-w-7xl grid grid-cols-1  lg:grid-cols-3 mx-auto gap-3 mt-24" >

                {data.map(post => (

                    <>

                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.desc.slice(0, 25)}...</p>
                                <small>Author : {post.author}</small>

                                <div className="card-actions justify-end">
                                    <button onClick={() => handleApprove(post)} className="btn btn-sm bg-main hover:bg-main text-black">Approve</button>
                                    <button onClick={() => setDeletePromt(!deletePromt)} className="btn btn-sm bg-red-500 hover:bg-red-600 text-black">Delete</button>
                                    <button onClick={() => {
                                        setSinglePost(post);
                                        setShowDetails(!showDetails)


                                    }} className="btn btn-sm btn-ghost">View</button>
                                </div>
                            </div>
                        </div>
                        {deletePromt && <DeletePromt postDelete={post} data={data} setData={setData} setDeletePromt={setDeletePromt} />}
                        {showDetails && <AdminPendingPostViewer post={singlePost} setShowDetails={setShowDetails} />}
                    </>

                ))}



            </div>




        </div>
    );
};

export default ApprovePost;


export async function getServerSideProps(context) {

    const db = await connectDb();
    const pendingPosts = await db.collection("blogposts").find({ pending: true }).toArray();


    return {
        props: { pendingPosts: JSON.parse(JSON.stringify(pendingPosts)) },
    }
}