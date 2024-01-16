'use client'
import React from 'react'
import {getAuth , signOut} from 'firebase/auth'
import {app} from '../config'
import {useRouter} from 'next/navigation';

const page = () => {

    const auth = getAuth(app);
    const router = useRouter();
    const handleLogout = async ()=>{
        try {
            await signOut(auth);
            router.push('/logindev')

        }catch (error){
            console.log(error);
        }
    }

  return (
    <>
    <div>dashboard</div>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default page