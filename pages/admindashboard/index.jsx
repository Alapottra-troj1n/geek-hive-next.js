import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { SiApostrophe } from 'react-icons/si';

const AdminDashboard = () => {

    const {data, status} = useSession();


    return (
        <div className="py-36">
            <h2 className="text-center font-type font-black text-4xl uppercase" >Admin Panel</h2>


            <div>
                <section className=" body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className=" text-3xl title-font mb-4 text-white font-display font-semibold capitalize">Welcome Admin, {data?.user?.name} </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
                        </div>
                        <div className="flex flex-wrap -m-4 text-center">

                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer ">
                                <Link href={'/admindashboard/approvepost'}>
                                <div className=" border-2 border-gray-200 px-4 py-6 rounded-lg bg-white text-slate-800 hover:border-main hover:bg-slate-100 transition-all" >
                                 
                                    <SiApostrophe className="text-green-600 w-12 h-12 mb-3 inline-block" />
                                    <h2 className="title-font font-bold font-display text-3xl">Pending Posts</h2>
                                
                                 
                                    <small className="leading-relaxed text-slate-600">Approve, Delete, Manage Pending Posts</small>
                                </div>
                                </Link>
                            </div>

                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
                                <Link href={''}>
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-slate-200 text-slate-800" >
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-bold font-display text-3xl">More Features</h2>
                                    <small className="leading-relaxed text-slate-600">Coming Soon</small>
                                </div>
                                </Link>
                            </div>

                           
                           
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AdminDashboard;

