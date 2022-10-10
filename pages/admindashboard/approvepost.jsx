import React, { useState } from 'react';
import AdminPendingPostViewer from '../../components/AdminPendingPostViewer';
import DeletePromt from '../../components/DeletePromt';
import connectDb from '../../lib/connectDb';

const ApprovePost = ({ pendingPosts }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [deletePromt, setDeletePromt] = useState(false);
    const [data, setData] = useState(pendingPosts);


    console.log(pendingPosts);
    return (
        <div className="py-36">


            {showDetails && <AdminPendingPostViewer setShowDetails={setShowDetails} />}
       




            <h2 className="text-center text-3xl font-type uppercase font-black" >Pending Posts - Admin</h2>






            <div className="max-w-7xl grid grid-cols-3 mx-auto gap-3 mt-24" >

                {pendingPosts.map(post => (

                    <>

                        <div className="card  bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.desc.slice(0,100)}...</p>
                                <small>Author : {post.author}</small>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm bg-main hover:bg-main text-black">Approve</button>
                                    <button onClick={() => setDeletePromt(!deletePromt)}  className="btn btn-sm bg-red-500 hover:bg-red-600 text-black">Delete</button>
                                    <button onClick={() => setShowDetails(!showDetails)} className="btn btn-sm btn-ghost">View</button>
                                </div>
                            </div>
                        </div>
                        {deletePromt && <DeletePromt postDelete={post} data={data} setData={setData} setDeletePromt={setDeletePromt} />}
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