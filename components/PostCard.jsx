import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = ({data,setDeletePromt,setPostDelete}) => {
  console.log(data)


  const handleDelete = async(e) => {
    setDeletePromt(true)
    setPostDelete(data)
  }


    return (
        <div className="card glass">
        <figure className=" relative h-60 w-80" ><Image layout="fill" objectFit='cover' alt='' src={data?.img} /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.desc.slice(0,50)}...</p>
          <div className="card-actions justify-end">
            <button onClick={handleDelete}  className="btn btn-primary">Delete</button>
            <Link href={`/edit/${data._id}`}><button className="btn btn-primary">Edit</button></Link>
          </div>
        </div>
     
      </div>
    );
};

export default PostCard;