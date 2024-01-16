'use client'
import React, {useState , useEffect} from 'react';
import {getAuth , RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";
import {app} from "../config";
import {useRouter} from "next/navigation";
import axios from 'axios';

const page = () => {


    const [aadharnum , setAadharnum] = useState('');
    const [otp , setOtp] = useState ('');
    const [confirmationResult , setConfirmationResult] = useState(null);
    const [otpSent , setOtpSent] = useState(false);
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

    const handleAadharnumChange = (e) => {
        setAadharnum(e.target.value);
    };

    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSendOtp = async () => {
        try{
            
            const apiKey = process.env.NEXT_PUBLIC_APP_API_KEY;
            const apiSecret = process.env.NEXT_PUBLIC_APP_API_SECRET;
           
            // const options = {
            //     method: 'POST',
            //     headers: {
            //         accept: 'application/json',
            //         // Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJBUEkiLCJyZWZyZXNoX3Rva2VuIjoiZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKaGRXUWlPaUpCVUVraUxDSnpkV0lpT2lKamJHOTFaSFJsWTJocllXWjFibVJoUUdkdFlXbHNMbU52YlNJc0ltRndhVjlyWlhraU9pSnJaWGxmYkdsMlpWOXNiVXRETld0cWJGSk1aVTFKYlZsNFpVVnRSamhqWW05NU4zcGlURVJxVlNJc0ltbHpjeUk2SW1Gd2FTNXpZVzVrWW05NExtTnZMbWx1SWl3aVpYaHdJam94TnpNM01ERXdOVE15TENKcGJuUmxiblFpT2lKU1JVWlNSVk5JWDFSUFMwVk9JaXdpYVdGMElqb3hOekExTXpnNE1UTXlmUS5HSGJJWlY1QUpBcDVOQW9Zbk9DVnd3Q2NfTkFlM2hoUUdnaGtQczY2NEhpODF1OTRTTXJGVTlGVHk2dVdGcThxS0VEaW1uWG4wUF9qM1lBRVlZS3lMQSIsInN1YiI6ImNsb3VkdGVjaGthZnVuZGFAZ21haWwuY29tIiwiYXBpX2tleSI6ImtleV9saXZlX2xtS0M1a2psUkxlTUltWXhlRW1GOGNib3k3emJMRGpVIiwiaXNzIjoiYXBpLnNhbmRib3guY28uaW4iLCJleHAiOjE3MDU0NzQ1MzIsImludGVudCI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwNTM4ODEzMn0.bbu1g4cN9BQ_sRsVNog-o0Gkuc71YQpZJ8QoJAajRKBmfcgPhYECQebMy9hzVzBMOC7YBmVxEFNWc96VoJetMQ',

            //         'x-api-key': apiKey,
            //         'x-api-secret': apiSecret,
            //         'x-api-version': '1.0',
            //     },
            // };
            
            // fetch('http://localhost:8080/https://api.sandbox.co.in/authenticate', options)
            //     .then(response => response.json())
            //     .then(response => console.log(response))
            //     .catch(err => console.error(err));
           
            setOtpSent(true);


      

            setAadharnum('');
            alert("OTP has been sent");

        }catch(error){
            console.error(error);
        }
    };
    const storedToken = localStorage.getItem('sandboxApiResponse');


  return (
    <>

    <h1>Aadhar Authenticate</h1>



    </>
  )
}

export default page