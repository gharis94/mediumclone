import React from 'react'
import {AiOutlineMedium} from 'react-icons/ai';
import {BsMedium} from 'react-icons/bs';


const Nav = () => {
  return (
    <div className='w-screen px-2 py-1 items-center h-14 flex justify-between '>
        <div className='flex space-x-4'>
            <div className='flex '>
                <AiOutlineMedium size={32}/>
                <BsMedium size={32}/>
            </div>
            <div  className = 'flex space-x-2 items-center' >
                <p>About</p>
                <p>Connect</p>
                <p>Follow</p>
            </div>    
        </div>
        
        <div className='flex space-x-4 items-center'>
            <p className='px-6 py-1  rounded-lg  border-2  border-green-400 text-green-400 '>Sign In</p>
            <p>Get Started</p>
        </div>
    </div>
  )
}

export default Nav