import React from 'react'

export const ChatBar = () => {
  return (
    <div className='w-[250px] h-screen border-[1px] border-[#074173] bg-[#074173] bg-opacity-50 px-5 py-2 '>
        <h1 className='text-lg font-semibold text-center mb-10 ' > massages</h1>
        <div className="flex justify-between gap-8 mb-5 ">
             <div className='flex items-center gap-5'> 
                <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                 <img src='' alt="user photo" />
                 </div>
             </div>
                 <h2 className='text-lg text-white font-semibold'>Lorem, ipsum.</h2>
         </div>

    </div>
  )
}
