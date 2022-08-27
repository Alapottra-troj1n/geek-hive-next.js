import { useRouter } from 'next/router';
import React from 'react';

const SinglePost = () => {
    const router = useRouter();
    const {slug} = router.query;


    return (
        <div className="h-[80vh]">
            <div className="pt-20">

                <h2>{slug}</h2>


            </div>
        </div>
    );
};

export default SinglePost;