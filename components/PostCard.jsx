import React from 'react';

const PostCard = ({data}) => {
    return (
        <div className="card w-96 glass">
        <figure><img src={data.img} alt=""/></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.desc.slice(0,50)}...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Delete</button>
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    );
};

export default PostCard;