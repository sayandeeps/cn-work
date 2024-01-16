'use client'
import React,{useEffect} from 'react'
import Login from './login'
import {getAuth , onAuthStateChanged} from "firebase/auth";
import {app} from "../config";
import {useRouter} from "next/navigation";



const page = () => {
    const router = useRouter();
    const auth = getAuth(app);

    useEffect(()=>{
        onAuthStateChanged(auth ,(user) => {
            if (user) {
                router.push('./dashboardev');
            }
        });
    } , [auth , router]);
  return (
    <>
    <h1>firebase</h1>
    <Login/>

    
    </>
  )
}

export default page