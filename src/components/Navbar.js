import React, { useContext, useEffect } from 'react'
import logo from '../assets/logowhite.png'
import { userData } from './context/usercontext'


export default function Navbar() {
    const { currentUser, setcurrentUser } = useContext(userData);
    // console.log(currentUser)
    // const userid = currentUser.Uid;
    // console.log(userid);
    // useEffect(()=>{
    //     const userref = collection(db, "user");
    //     const q = query(userref, where("Email", "==", Email));
    //     console.log('before q')
    //     console.log(q);
    // },[])
    return (
        <div className='h-20 rounded-b-3xl bg-black text-white border-b  bg- w-full pr-3 pl-3  flex flex-row items-center justify-between gradbg'>
            <div>
                <div className='text-xs text-[#d4c4c4]'>{currentUser.email}</div>
                <div className='mr-1 font-medium text-lg'>{currentUser.Username}</div>
            </div>

            <img className="h-10  pl-2" src={logo} alt="" />
            {/* <div className='flex flex-row items-center mr-4'>
                
                <i className="fa-solid fa-right-from-bracket"></i>
            </div> */}
        </div>
    )
}
