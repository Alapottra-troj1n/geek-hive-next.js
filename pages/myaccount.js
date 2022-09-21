import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import connectDb from '../lib/connectDb';

const MyAccount = ({ user }) => {

  console.log(user);



  return (
    <div className=' py-36'>



      <div className='flex justify-center items-center flex-col'>
        <div className='relative h-80 w-80 '>
          <Image src={user?.image || 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000'} layout='fill' alt='' className='rounded-full' objectFit='cover' />
        </div>
        <h2 className='text-4xl font-type font-bold capitalize mt-5' >Hey, <span>{user[0]?.username}</span> </h2>

        <div className='mt-6'>
          <h2 className='font-display  text-2xl'>Here is your statistics</h2>


          <div className='my-5'>

            <div className="stats stats-vertical lg:stats-horizontal shadow">

              <div className="stat">
                <div className="stat-title">My Blogs</div>
                <div className="stat-value">21</div>
              </div>

              <div className="stat">
                <div className="stat-title">My Role</div>
                <div className="stat-value">Writer</div>
              </div>

              <div className="stat">
                <div className="stat-title">Likes</div>
                <div className="stat-value">1,200</div>
              </div>

            </div>


          </div>


          <div className="flex justify-center">

            <div className="btn-group btn-group-horizontal">
              <Link href={'/addblog'} ><button className="btn ">Add a Blog</button></Link>
              <Link  href={'/manage'} ><button className="btn ">Manage Blogs</button></Link>
            </div>


          </div>


        </div>





      </div>



    </div>
  );


};

export default MyAccount;


export async function getServerSideProps(context) {

  const data = await getSession(context);

  const userEmail = data.user.email;

  const db = await connectDb();


  const userData = await db.collection('users').find({ email: userEmail }).project({ password: 0 }).toArray();




  return {
    props: { user: JSON.parse(JSON.stringify(userData)) } // will be passed to the page component as props
  }
}