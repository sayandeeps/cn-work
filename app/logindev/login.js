'use client'
import React, {useState , useEffect} from 'react';
import {getAuth , RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";
import {app} from "../config";
import {useRouter} from "next/navigation";
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


require('dotenv').config();


export default function login(){

    const [phoneNumber , setPhoneNumber] = useState('');
    const [otp , setOtp] = useState ('');
    const [confirmationResult , setConfirmationResult] = useState(null);
    const [otpSent , setOtpSent] = useState(false);

    const auth = getAuth(app);
    const router = useRouter();
    useEffect(()=>{
        window.recapthaVerifier = new RecaptchaVerifier(auth , "recaptcha-container", {
            'size' : 'normal',
            'callback' : (response) => {

            },
            'expired-callback' : ()=>{

            }
        });
    },[auth]);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSendOtp = async () => {
        try{
            const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g,'')}`;
            const confirmation = await signInWithPhoneNumber(auth , formattedPhoneNumber, window.recapthaVerifier);
            setConfirmationResult(confirmation);
            setOtpSent(true);


      

            
            alert("OTP has been sent");

        }catch(error){
            console.error(error);
        }
    };

    const handleOTPSubmit = async () => {
        try {
            await confirmationResult.confirm(otp);
    
            setOtp('');
            const apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
            const apiSecret = process.env.NEXT_PUBLIC_APP_API_SECRET;
    
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'x-api-key': apiKey,
                    'x-api-secret': apiSecret,
                    'x-api-version': '1.0',
                },
            };
    
            // Fetch the access token
            const response = await fetch('/api/authenticate', options);
            const data = await response.json();

            const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
            const documentId = `user_${formattedPhoneNumber.slice(0, 15)}`;
            const promise = databases.createDocument(appwritedid, appwritecid, documentId, {
                phone : `${phoneNumber}` ,
            });

            promise.then(function (response) {
                console.log(response); // Success
            }, function (error) {
                console.log(error); // Failure
            });

    
    
            // Save the access token to local storage
            localStorage.setItem('sandboxApiResponse', JSON.stringify(data.access_token));
            localStorage.setItem('uid', documentId );

    
            // Redirect to the dashboard after saving the token
            alert("You are signedin")

            window.location.href = '/dashboard';
        } catch (error) {
            console.error(error);
            alert(error)
            window.location.href = '/logindev';

        }
    };
    

    return(
        <>
      
        <section className="font-poppins ">
        <div className="hidden py-20 text-center bg-blue-100   :bg-gray-700 lg:block">
          <div className="max-w-3xl mx-auto mb-24">
            <p className="mb-6 font-semibold text-gray-800 text-4xl   :text-gray-300">
              Login our account
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
                    value = {phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter your phone number"
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
                <div> 
                    {!otpSent ? (
                    <div id="recaptcha-container"></div>
                ) : null}
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
        
        </>
    )

}
