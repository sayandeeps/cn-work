'use client'
import React, {useState , useEffect} from 'react';
import {getAuth , RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";
import {app} from "../config";
import {useRouter} from "next/navigation";
import axios from 'axios';


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


      

            setPhoneNumber('');
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
            const response = await fetch('http://localhost:8080/https://api.sandbox.co.in/authenticate', options);
            const data = await response.json();
    
            console.log(data);
    
            // Save the access token to local storage
            localStorage.setItem('sandboxApiResponse', JSON.stringify(data.access_token));
    
            // Redirect to the dashboard after saving the token
            router.push('/dashboarddev');
        } catch (error) {
            console.error(error);
        }
    };
    

    return(
        <>
        
        {!otpSent ? (
            <div id="recaptcha-container"></div>
        ) : null}

        <input 
        type="tel" 
        value = {phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder='enter the phone number'
        />

        <input 
        type="text" 
        value = {otp}
        onChange={handleOTPChange}
        placeholder='enter the OTP'
        />

        <button
        onClick={otpSent ? handleOTPSubmit : handleSendOtp}
        >
            {otpSent ? 'submit OTP' : 'send OTP'}
        </button>


        
        </>
    )

}
