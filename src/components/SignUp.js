import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { userData } from './context/usercontext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Backend/firebase';
import { doc, getFirestore, setDoc } from "firebase/firestore";
// import fir


export default function SignUp() {
    const { currentUser, setcurrentUser } = useContext(userData);
    const navigate = useNavigate();
    const toSignIn = () => {
        navigate("/signin")
    }
    async function signin(e) {
        e.preventDefault();
        const Username = e.target[0].value;
        const Email = e.target[1].value;
        const Password = e.target[2].value;
        console.log(Username , Email , Password)

        const auth = getAuth(app);
        const db = getFirestore(app);
        try {
            
            const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
            const user = userCredential.user;
            user.displayName = Username;
            console.log(userCredential)
            console.log(user)
            setcurrentUser({"email" : Email , Password , Username})
            await setDoc(doc(db, "user", user.uid), {Username , Email}); 
            navigate("/")
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <div>
            <img src={logo} className='m-auto' alt="" />
            <div className='p-4 pl-10 pr-10'>
                <form action="" className='flex flex-col items-center' onSubmit={signin}>

                    <input type="text" className='border-b-2 outline-none placeholder:text-black placeholder:font-medium placeholder:text-sm p-2 pl-0 text-black font-medium text-lg w-full' placeholder='Username' />
                    <input type="email" className='border-b-2 outline-none placeholder:text-black placeholder:font-medium placeholder:text-sm p-2 pl-0 text-black font-medium text-lg w-full' placeholder='Email' />
                    <input type="password" className='border-b-2 outline-none placeholder:text-black placeholder:font-medium placeholder:text-sm p-2 pl-0 text-black font-medium text-lg w-full' placeholder='Password (over 6 char)' />
                    <button className='border text-white font-normal rounded-full w-full text-base mt-6 p-2 bgbutton'>Sign up</button>
                </form>
                <div className='text-center text-xs mt-4 font-medium '>Already have an account <span className='text-[#28b9b0]' onClick={toSignIn}>sign in!</span></div>
            </div>
        </div>
    )
}
