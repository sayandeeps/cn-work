'use client'
import React, {useState , useEffect} from 'react';
import {getAuth , RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";
import {app} from "../config";
import {useRouter} from "next/navigation";



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
        try{
            await confirmationResult.confirm(otp);
            setOtp('');
            router.push('/dashboard');
        }catch(error){
            console.error(error)
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
