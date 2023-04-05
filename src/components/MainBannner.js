import React from 'react'
import {AiOutlineMedium} from 'react-icons/ai'

const MainBannner = () => {
  return (
    <div className='bg-yellow-300 h-[50vh] w-screen shadow-md  border-yellow-400 grid sm:grid-cols-3'>
        <div className='col-span-2 flex justify-center items-center'>
            <p className='text-5xl font-semibold'><span className='underline'>Medium</span>  is place to write read, and connect</p>
        </div>
        <div className='col-span-1 flex justify-center items-center'>
            <AiOutlineMedium size={140}/>
        </div>
    </div>
  )
}

export default MainBannner