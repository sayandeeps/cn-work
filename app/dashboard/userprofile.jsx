'use client'
import React, { useState , useEffect } from 'react'
import Layout from '../components/layout'
import { Client, Databases } from "appwrite";
import {useRouter} from 'next/navigation';


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



const userprofile = () => {

  const [activeTab, setActiveTab] = useState('security');
  const [uid,setUid] = useState('')
  const [name,setname]= useState('')
  const [address,setaddress]= useState('')
  const [careof,setcareof]= useState('')
  const [kycdone,setkycdone]= useState('')
  const [dob,setdob]= useState('')
  const [gender,setgender]= useState('')
  const [phone,setphone]= useState('')

  useEffect(() => {

  
    const fetchData = async () => {
      try {
        console.log(uid)
        setUid(localStorage.getItem('uid'))
        const response = await databases.getDocument(appwritedid, appwritecid, uid);
        console.log(response.phone);
  
        setname(response.name);
        setaddress(response.address);
        setcareof(response.careof);
        setkycdone(response.kycdone);
        setdob(response.dob);
        setgender(response.gender);
        setphone(response.phone);
  
        // Use the callback form of setMyObject to ensure you are working with the updated state
       console.log(gender)
        console.log(); // This might still log the old state, as setMyObject is asynchronous
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchData();
  }, );
  
  


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  return (
    <Layout>

            <div className="relative">
                <img src="/bg.jpg" className="w-full h-72 object-cover rounded-lg" alt=""/>
                <a href="#" className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/50 hover:bg-white flex items-center justify-center">
                    <i className='bx bx-edit-alt' ></i>
                </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" className="w-28 h-28 object-cover rounded-full" alt=""/>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">{name} ({gender})</h2>
                    <span className="text-lg text-gray-500">{careof}</span>
                    <p className="text-lg text-gray-500">{dob}</p>
                </div>
                <a href="#" className="py-2 px-4 rounded bg-blue-600 sm:flex items-center gap-2 text-white hover:bg-blue-700 ml-auto hidden">
                    Complete your KYC
                </a>
            </div>
            <p className="text-gray-500 text-lg mt-4 mb-8">Address : {address} </p>
            <p  className="text-gray-500 text-lg mt-4 mb-8"> phone number : {phone}</p>
            <div>
                <div className="flex items-center gap-8 tab-indicator border-b border-gray-200">
                <span
          onClick={() => handleTabClick('security')}
          className={activeTab === 'security' ? 'active' : ''}
        >
          My Portfolio
        </span>
        <span
          onClick={() => handleTabClick('activities')}
          className={activeTab === 'activities' ? 'active' : ''}
        >
          My Activities
        </span>
        <span
          onClick={() => handleTabClick('contact')}
          className={activeTab === 'contact' ? 'active' : ''}
        >
          Contact Info
        </span>
                </div>
                <div className="tab-content mt-4" id="security">
        {activeTab === 'security' && (
          <h2 className="text-2xl font-semibold"> Info</h2>
        )}
      </div>
      <div className="tab-content mt-4 hidden" id="activities">
        {activeTab === 'activities' && (
          <h2 className="text-2xl font-semibold">My Activities</h2>
        )}
        efr
      </div>
      <div className="tab-content mt-4 hidden" id="contact">
        {activeTab === 'contact' && (
          <h2 className="text-2xl font-semibold">Contact Info</h2>
        )}
      </div>
            </div>
        
     
    </Layout>
  )
}

export default userprofile