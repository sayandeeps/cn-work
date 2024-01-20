'use client'
import React, {useState , useEffect} from 'react';
import {getAuth , RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";
import {app} from "../config";
import {useRouter} from "next/navigation";
import axios from 'axios';
import { Client, Databases } from "appwrite";
import Layout from '../components/layout'


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


    const [aadharnum , setAadharnum] = useState('');
    const [otp , setOtp] = useState ('');
    const [confirmationResult , setConfirmationResult] = useState(null);
    const [otpSent , setOtpSent] = useState(false);
    const auth = getAuth(app);
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [refid , setRefid] =useState('');

    const [storedToken, setStoredToken] = useState('');
    const [storedUid, setStoredUid] = useState('');



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          // This callback will be called whenever the user's login status changes
          setUser(user);
        });
      
  
  
        return () => unsubscribe();
      }, [auth]);
  

      useEffect(()=>{

        const tokenFromLocalStorage = localStorage.getItem('sandboxApiResponse');
        const uidFromLocalStorage = localStorage.getItem('uid');
    
        // Set the state with the retrieved token
        if (tokenFromLocalStorage) {
          setStoredToken(JSON.parse(tokenFromLocalStorage));
        }
        if (uidFromLocalStorage) {
            setStoredUid(uidFromLocalStorage);
          }
    
      },[])

    const handleAadharnumChange = (e) => {
        setAadharnum(e.target.value);
    };

    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    };
    const apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
    const apiSecret = process.env.NEXT_PUBLIC_APP_API_SECRET;
    const handleSendOtp = async () => {
        try{
            
        
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    Authorization: storedToken,
                    'x-api-key': apiKey,
                    'x-api-secret': apiSecret,
                    'x-api-version': '1.0',
                    'content-type': 'application/json'

                },
                body: JSON.stringify({aadhaar_number: `${aadharnum}` })

            };
            
            const response = await fetch('/api/kyc/aadhaar/okyc/otp', options);
            const data = await response.json();
            // Check if the response contains the ref_id
            if (data && data.data && data.data.ref_id) {
                const refId = data.data.ref_id;
                setRefid(refId)

                // Now you can use the refId variable for further processing or storage.
            } else {
                console.error('Error: Unable to retrieve ref_id from the response');
            }


           
            setOtpSent(true);


      
            // setAadharnum('');
            alert("OTP has been sent");

        }catch(error){
            console.error(error);
        }
    };

    const handleOTPSubmit = async () => {
        try {
          // Ensure that the refid is available
          if (!refid) {
            console.error('Error: refid is missing');
            return;
          }
      
          const apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
          const apiSecret = process.env.NEXT_PUBLIC_APP_API_SECRET;
      
          const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              Authorization: storedToken,
              'x-api-key': apiKey,
              'x-api-secret': apiSecret,
              'x-api-version': '1.0',
              'content-type': 'application/json',
            },
            body: JSON.stringify({ otp: otp, ref_id: refid }),
          };
      
          // Call the second API to verify the OTP
          const response = await fetch('/api/kyc/aadhaar/okyc/otp/verify', options);
          const data = await response.json();
          
          // Handle the response data as needed
      
          // For example, update the UI based on the verification status
          if (data && data.code === 200 && data.data && data.data.status === 'VALID') {
            // OTP verification successful
            // Update UI or take further actions
            console.log('OTP verification successful');
            
            const promise = databases.updateDocument(appwritedid, appwritecid, storedUid ,{
                kyc_done : true,
                name : data.data.name,
                careof : data.data.care_of, 
                address : data.data.address,
                dob : data.data.dob,
                gender : data.data.gender,
            });

            promise.then(function (response) {
              console.log(response)
            }, function (error) {
                console.log(error); // Failure
            });
            alert("OTP verification successful")
            window.location.href = '/dashboard';

          } else {
            // OTP verification failed
            // Handle error or update UI accordingly
            console.error('Error: OTP verification failed');
          }

          




        } catch (error) {
          console.error(error);
        }
      };
      

    


  return (
    <Layout>


  

       

        <section className="font-poppins ">
        <div className="hidden py-20 text-center bg-orange-100   :bg-gray-700 lg:block">
          <div className="max-w-3xl mx-auto mb-24">
            <p className="mb-6 font-semibold text-gray-800 text-4xl   :text-gray-300">
              Complete Your KYC
            </p>
            <p className="mb-6 text-xl text-gray-500 "></p>
          </div>
        </div>
        <div className="max-w-xl mx-auto ">
          <div className="w-full shadow-lg bg-gray-50   :bg-gray-800 mt-11 lg:-mt-36 lg:full p-7 rounded-3xl">
            <div className="">
              <div action="" className="p-0 m-0">
                <div className="mb-7">
                  <input
                    type="tel"
                    className="w-full px-4 py-4 bg-gray-200 rounded-lg   :bg-gray-700 lg:py-5   :text-gray-300 "
                    value = {aadharnum}
                    onChange={handleAadharnumChange}
                    placeholder="Enter your aadhar number"
                  />
                </div>
                <div className="mb-6 flex items-center">
                  <div className="relative flex items-center justify-between  ">
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-200 rounded-lg lg:py-4     "
                      value = {otp}
                    onChange={handleOTPChange}
                      placeholder="Enter OTP"
                    />

                    
                  </div>
                </div>
                
                <button
                  className="w-full px-4 py-4 mt-6 font-medium text-gray-200 bg-blue-700 rounded-lg   :bg-blue-500 hover:text-blue-200 "
                  onClick={otpSent ? handleOTPSubmit : handleSendOtp}
                >
                  {otpSent ? 'submit OTP' : 'send OTP'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>




    </Layout>
  )
}

export default page