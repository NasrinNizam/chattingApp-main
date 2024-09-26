import React from 'react'

export const BlockList = () => {
  return (
    <div>
        <div className='container  flex justify-center items-center'>
      <div className="p-5 bg-[#074173] bg-opacity-50 h-[500px] border-2 border-[#074173] rounded-lg mt-10 flex flex-col gap-6 p-5 ">
        <h2 className='text-lg font-medium font-poppins mt-5 text-center'>Block List</h2>
            <div className="flex justify-between items-center gap-8 mb-5 ">
             <div className='flex items-center gap-5'> 
                <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
                 <img src='' alt="user photo" />
                 </div>
                 <h2 className='text-lg font-semibold'>Name</h2>
             </div>
             <div className="butts">
                 <button className='rounded-lg py-1 px-3 bg-red-600 text-sm text-white font-normal'>Unblock</button>
             </div>
         </div>    
       </div>
     </div>
    </div>
  )
}
