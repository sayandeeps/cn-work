import React from 'react'
import '../globals.css'
import {getAuth , signOut} from 'firebase/auth'
const auth = getAuth(app);
import {app} from '../config'



const layout = ({children}) => {

    const handleLogout = async ()=>{
      
        try {
            await signOut(auth);
            localStorage.removeItem('sandboxApiResponse');
            localStorage.removeItem('uid');

            window.location.href = '/logindev';


        }catch (error){
            console.log(error);
        }
    }

  return (
    <>

    {/* nav bar  */}
    <nav className="h-16 py-1 px-4 bg-white shadow-md sticky top-0 left-0 z-50">
        <div className="flex items-center h-full gap-12">
            <img src="/logo.svg" alt="" height="30" width="30" />
            <a href="#" className="flex items-center gap-4">
                
                <span className="text-2xl font-semibold">Cloud Tech Ka Funda</span>
            </a>
            
            <button onClick={handleLogout} className="ml-auto relative text-gray-500 hover:text-gray-800 hidden md:block">
                <img src="/logout.svg" alt="" height="30" width="30"  />
            </button>
           
            {/* <a href="#" className="relative text-gray-500 hover:text-gray-800 ml-auto md:ml-0">
                <i className='bx bx-bell text-2xl' ></i>
                <span className="absolute -top-1 w-2 h-2 rounded-full bg-red-600 left-1/2 -translate-x-1/2"></span>
            </a>  */}
        </div>
    </nav>
    {/* navbar end  */}

    {/* sidebar start */}
    <div className="fixed top-16 transition-all overflow-hidden left-0 w-64 bg-white border-r border-gray-200 bottom-0 sidebar-collapse z-40" id="sidebar">
        <a href="/dashboard" className="p-4 flex items-center gap-4 hover:bg-blue-50">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" className="w-16 aspect-square object-cover rounded" alt=""/>
            <div className="whitespace-nowrap sidebar-user-profile">
                <h3 className="text-lg font-semibold mb-1">Fajar Std</h3>
                <span className="py-1 px-2 rounded-full bg-blue-600 text-white text-sm font-medium">Level One</span>
            </div>
        </a>
        <div className="py-4">
            <span className="text-sm text-gray-500 uppercase ml-4 inline-block mb-2 sidebar-menu-title">Menu</span>
            <ul className="sidebar-menu">
                <li>
                    <a href="#" className="active">
                        <img src="/user.svg" alt="" />
                        
                    </a>
                </li>
                
            </ul>
        </div>
    </div>
    {/* sidebar end */}
    <div className="pl-0 md:pl-64 transition-all" id="main">
        <div className="p-4">
        {children}
        </div>
    </div>
    

    
    
    </>
  )
}

export default layout