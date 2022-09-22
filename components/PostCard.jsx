import React from 'react';

const PostCard = ({data}) => {
  console.log(data)
  const handleDelete = async(e) => {

    const settings = {
      method: 'DELETE',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
    
  };

  const res = await fetch(`http://localhost:3000/api/deletepost?_id=${data._id}`, settings);
  const d = await res.json();

  console.log(d);



  }


    return (
        <div className="card w-96 glass">
        <figure><img src={data.img} alt=""/></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.desc.slice(0,50)}...</p>
          <div className="card-actions justify-end">
            <button onClick={handleDelete}  className="btn btn-primary">Delete</button>
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    );
};

export default PostCard;