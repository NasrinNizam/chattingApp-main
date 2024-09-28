import React from 'react'

export const Massage = () => {
  return (
    <div className='w-full'>
        <div className="flex justify-between p-2 gap-8 w-full bg-[#074173] ">
             <div className='flex items-center gap-5 ml-3'> 
                <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                 <img src='' alt="user photo" />
                 </div>
                 <h2 className='text-lg text-white font-semibold'>Lorem, ipsum.</h2>
             </div>
         </div>
             <div className="massages p-5 w-full h-[490px] bg-[#94A3B8] overflow-y-scroll">
                <div className='receive w-fit py-1 px-3 bg-[#78B7D0] rounded  '>Lorem, ipsum.</div>
                <div className='send w-fit py-1 px-3 ml-auto bg-[#074173] text-white rounded  '>Lorem, ipsum.</div>
             </div>
    </div>
  )
}
