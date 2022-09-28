import Link from 'next/link';
import React from 'react';
import DeletePromt from './DeletePromt';

const PostCard = ({data,setDeletePromt,setPostDelete}) => {
  console.log(data)


  const handleDelete = async(e) => {
    setDeletePromt(true)
    setPostDelete(data)
  }


    return (
        <div className="card w-96 glass">
        <figure><img src={data?.img} alt=""/></figure>
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