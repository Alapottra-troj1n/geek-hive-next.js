import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const DeletePromt = ({postDelete, setDeletePromt,data,setData}) => {


    const handleDelete = async(e) => {
        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
          
        };
      
        const res = await fetch(`https://geek-hive-next-js.vercel.app/api/deletepost?_id=${postDelete._id}`, settings);
        const d = await res.json();
      
       if(d.success) {
            setDeletePromt(false);
            let filteredArray = data.filter(item => item._id !== postDelete._id);
            console.log(filteredArray);
            setData(filteredArray);      
       }
      
    }


    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30" >

            <div className="p-16 bg-slate-700 border-2 flex justify-center flex-col border-main">
                <div onClick={() => setDeletePromt(false)} className="absolute top-2 right-3" ><AiOutlineClose className="text-main text-xl cursor-pointer " /></div>
                <div>
                    <h2 className='font-display font-bold text-center pb-7 lg:text-2xl' >DO YOU REALLY WANT TO DELETE <br /> {postDelete?.title}</h2>
                </div>
                <button onClick={handleDelete} className='btn' >DELETE</button>

           

            </div>

        </div>
    );
};

export default DeletePromt;