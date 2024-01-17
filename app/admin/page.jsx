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

const page = () => {

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
                                    <td colSpan="7">No data available</td>
                                </tr>
                                )}
                                        
                                    
                                      
                                       
                                    </tbody>  
                                </table>
                            </div>
                        </div>
               
              
                       
    
    </Layout>
  )
}

export default page