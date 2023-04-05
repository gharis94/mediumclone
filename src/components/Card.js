import React from 'react'

const Card = () => {
  return (
    <div className='h-[16rem] w-[20rem] bg-blue-500 rounded-md overflow-hidden'>
        <div className='w-full h-[70%] bg-slate-500'>

        </div>
        <div className='grid grid-cols-4'>
            <div className='col-span-3'>
                <p>title</p>
                <p>description</p>
            </div>
            <div className='col-span-1'>

            </div>
        </div>
    </div>
  )
}

export default Card