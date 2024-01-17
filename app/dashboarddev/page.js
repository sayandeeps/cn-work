'use client'
import React,{useState , useEffect} from 'react'
import {getAuth , signOut} from 'firebase/auth'
import {app} from '../config'
import {useRouter} from 'next/navigation';

const page = () => {

    const auth = getAuth(app);
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [storedToken, setStoredToken] = useState('');


    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
          setUser(user);
      });

      return () => unsubscribe();
  }, [auth]);
 useEffect(()=>{

    const tokenFromLocalStorage = localStorage.getItem('sandboxApiResponse');

    // Set the state with the retrieved token
    if (tokenFromLocalStorage) {
      setStoredToken(tokenFromLocalStorage);
    }
    console.log("life"+storedToken)

  },[])
 

    

    const handleLogout = async ()=>{
      
        try {
            await signOut(auth);
            localStorage.removeItem('sandboxApiResponse');
            localStorage.removeItem('uid');

            router.push('/logindev')

        }catch (error){
            console.log(error);
        }
    }
   

    
  return (
    <>
    <div>dashboard</div>
    <p>{storedToken}</p>
    
    <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default page