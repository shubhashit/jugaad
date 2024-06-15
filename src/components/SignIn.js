import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { userData } from './context/usercontext';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Backend/firebase';
import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";


export default function SignIn() {
    const { currentUser, setcurrentUser } = useContext(userData);
    const navigate = useNavigate();
    const toSignUp = () => {
        navigate("/signup")
    }
    async function signin(e) {
        e.preventDefault();
        const Email = e.target[0].value;
        const Password = e.target[1].value;
        // setcurrentUser({Username , Password})
        localStorage.setItem("jugaadUser", { Email, Password })
        const auth = getAuth(app);
        const db = getFirestore(app);
        try {

            const userCredential = await signInWithEmailAndPassword(auth, Email, Password);
            const user = userCredential.user;
            console.log(user)
            const userref = collection(db, "user");
            const q = query(userref, where("Email", "==", Email));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot.docs[0].data());
            console.log(querySnapshot)
            setcurrentUser({ "Username": querySnapshot.docs[0].data().Username, "email": user.email, "Uid": user.uid, })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='max-sm:hidden flex flexr justify-center items-center h-[100vh]'>

                <div className='w-[40rem] h-25rem] border border-blue-400 rounded-xl'>
                    <img src={logo} className='m-auto h-1/4 w-1/4' alt="" />
                    <div className='p-4 pl-10 pr-10'>
                        <form action="" className='flex flex-col items-center' onSubmit={signin}>

                            <input type="email" className='border-b-2 outline-none placeholder:text-black placeholder:font-medium placeholder:text-sm p-2 pl-0 text-black font-medium text-lg w-full' placeholder='Email' />
                            <input type="password" className='border-b-2 outline-none placeholder:text-black placeholder:font-medium placeholder:text-sm p-2 pl-0 text-black font-medium text-lg w-full' placeholder='Password' />
                            <div className='text-xs text-[#afaaaa] w-full text-end mt-4'>Forgot your password ?</div>
                            <button className='border text-white font-normal rounded-full w-full text-base mt-6 p-2 bgbutton'>Sign in</button>
                        </form>
                        <div className='text-center text-xs mt-4 font-medium '>Don't have a account? <span className='text-[#28b9b0]' onClick={toSignUp}>sign up!</span></div>
                    </div>
                </div>
            </div>



            {/* mobile view here */}
            <div className='sm:hidden'>
                <img src={logo} className='m-auto' alt="" />
                <div className='p-4 pl-10 pr-10'>
                    <form action="" className='flex flex-col items-center' onSubmit={signin}>

                        <input type="email" className='border-b-2 outline-none placeholder:text-black placeholder:font-medium placeholder:text-sm p-2 pl-0 text-black font-medium text-lg w-full' placeholder='Email' />
                        <input type="password" className='border-b-2 outline-none placeholder:text-black placeholder:font-medium placeholder:text-sm p-2 pl-0 text-black font-medium text-lg w-full' placeholder='Password' />
                        <div className='text-xs text-[#afaaaa] w-full text-end mt-4'>Forgot your password ?</div>
                        <button className='border text-white font-normal rounded-full w-full text-base mt-6 p-2 bgbutton'>Sign in</button>
                    </form>
                    <div className='text-center text-xs mt-4 font-medium '>Don't have a account? <span className='text-[#28b9b0]' onClick={toSignUp}>sign up!</span></div>
                </div>
            </div>
        </>
    )
}
