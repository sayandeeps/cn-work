'use client'
import React,{useState , useEffect} from 'react'
import {getAuth , signOut} from 'firebase/auth'
import {app} from '../config'
import {useRouter} from 'next/navigation';

const page = () => {

    const auth = getAuth(app);
    const router = useRouter();

    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        // This callback will be called whenever the user's login status changes
        setUser(user);
      });
    


      return () => unsubscribe();
    }, [auth]);

    console.log(user);

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
    
    <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default page