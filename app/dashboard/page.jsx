'use client'
import React, { useState , useEffect } from 'react'
import Layout from '../components/layout'
import { Client, Databases } from "appwrite";
import {useRouter} from 'next/navigation';
import Userprofile from './userprofile'


const client = new Client();

const databases = new Databases(client);
const appwriteurl = process.env.NEXT_PUBLIC_APP_APPWRITE_URL;
const appwritepid = process.env.NEXT_PUBLIC_APP_APPWRITE_PID;
const appwritedid = process.env.NEXT_PUBLIC_APP_APPWRITE_DID;
const appwritecid = process.env.NEXT_PUBLIC_APP_APPWRITE_CID;

client
    .setEndpoint(appwriteurl) 
    .setProject(appwritepid) 
;



const page = () => {
    const [activeTab, setActiveTab] = useState('security');
    const [uid,setUid] = useState('')
    
    const [kycdone,setkycdone]= useState('')

  
    useEffect(() => {
  
    
      const fetchData = async () => {
        try {
          console.log(uid)
          setUid(localStorage.getItem('uid'))
          const response = await databases.getDocument(appwritedid, appwritecid, uid);
          console.log(response.kyc_done);
    
   
          setkycdone(response.kyc_done);
          
    
          // Use the callback form of setMyObject to ensure you are working with the updated state
         console.log(gender)
          console.log(); // This might still log the old state, as setMyObject is asynchronous
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
      fetchData();
    },  );
    
    console.log(kycdone)
    
  return (
    <>
    {kycdone ? (
        // Render content when kycdone is true
        <div>
            <Userprofile/>
        </div>
    ) : (
        // Render alternative content when kycdone is false
        <Layout>
           <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">KYC not done yet ! </strong>
  <span class="block sm:inline"> <a href="/aadharotp"><u>Click here</u>  </a>To Complete your KYC</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>
        </Layout>
    )}
</>
  )
}

export default page