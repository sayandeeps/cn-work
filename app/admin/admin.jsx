'use client'

import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Users from './component/users'

import axios from 'axios';


import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

const appwriteurl = process.env.NEXT_PUBLIC_APP_APPWRITE_URL;
const appwritepid = process.env.NEXT_PUBLIC_APP_APPWRITE_PID;
const appwritedid = process.env.NEXT_PUBLIC_APP_APPWRITE_DID;
const appwritecid = process.env.NEXT_PUBLIC_APP_APPWRITE_CID;

client
    .setEndpoint(appwriteurl) // Your API Endpoint
    .setProject(appwritepid) // Your project ID
;

const Admin = () => {

    const [data, setData] = useState(null)


    useEffect(() => {
        const fetchAppwriteData = async () => {
            try {
                const response = await databases.listDocuments(appwritedid, appwritecid);

                // Assuming 'documents' property exists in the response
                if (response && response.documents && response.documents.length > 0) {
                    setData(response.documents);
                }
            } catch (error) {
                console.error('Error fetching Appwrite data:', error);
            }
        };

        fetchAppwriteData();
    }, []);

  return (
    <Layout>


<section className="px-6 pt-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="flex items-center p-4 rounded-md shadow  :bg-gray-900 bg-gray-50">
                            <div className="mr-4">
                                <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full  :text-gray-400  :bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <p className="mb-2 text-gray-700  :text-gray-400">Total User </p>
                                <h2 className="text-2xl font-bold text-gray-700  :text-gray-400">
                                    {data && data.length}</h2>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-md shadow  :bg-gray-900 bg-gray-50">
                            <div className="mr-4">
                                <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full  :text-gray-400  :bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-bag-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z">
                                        </path>
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                            <p className="mb-2 text-gray-700  :text-gray-400">User with Kyc </p>
                                <h2 className="text-2xl font-bold text-gray-700  :text-gray-400">
                                    {data && data.length}</h2>
                            </div>
                        </div>
                        <div className="flex items-center p-4 rounded-md shadow  :bg-gray-900 bg-gray-50">
                            <div className="mr-4">
                                <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full  :text-gray-400  :bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 bi bi-chat-text" viewBox="0 0 16 16">
                                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z">
                                        </path>
                                        <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                            <p className="mb-2 text-gray-700  :text-gray-400">User With No Kyc </p>
                                <h2 className="text-2xl font-bold text-gray-700  :text-gray-400">
                                    {data && data.length}</h2>
                            </div>
                        </div>
                    </div>
                </section>

    <div className="pt-4 bg-white rounded shadow  :text-gray-100  :bg-gray-900">
                            <div className="flex px-6 pb-4 border-b  :border-gray-700">
                                <h2 className="text-xl font-bold  :text-gray-400">Users</h2>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="text-xs text-left text-gray-500  :text-gray-400">
                                            <th className="px-6 pb-3 font-medium">Name</th>
                                            <th className="px-6 pb-3 font-medium ">Care Of </th>
                                            <th className="px-6 pb-3 font-medium">Address </th>
                                            <th className="px-6 pb-3 font-medium">Date of Birth</th>
                                            <th className="px-6 pb-3 font-medium"> Gender </th>
                                            <th className="px-6 pb-3 font-medium"> Phone </th>
                                            <th className="px-6 pb-3 font-medium"> KYC Status </th>
                                        </tr>
                                    </thead>
                                     <tbody>

                                     {data && data.length > 0 ? (
                                data.map((userData, index) => (
                                    <Users key={index} data={userData} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">Data Loading ....</td>
                                </tr>
                                )}
                                        
                                    
                                      
                                       
                                    </tbody>  
                                </table>
                            </div>
                        </div>
               
              
                       
    
    </Layout>
  )
}

export default Admin