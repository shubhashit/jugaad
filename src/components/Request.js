import React from 'react'

export default function Request(props) {
  return (
      <div className='w-[90%]  text-white gradbgR mt-2 mb-2 rounded-2xl p-2'>       
        <div className='text-lg font-medium'>{props.distination}</div>
          <div className='text-sm font-normal text-[#d4c4c4]'>{props.distance}</div>

        <div className='flex flex-row mt-2'>
            <div className='w-[25%]  rounded-lg mr-3 text-center p-1 text-xs font-normal bg-black text-white'>Deliver</div>
              <div className=' w-[25%] rounded-lg mr-3 text-center p-1 text-xs font-normal bg-black text-white'>lift</div>
        </div>
      <div className='flex flex-row justify-end text-sm font-bold'>
        <div>CONTACT</div>
      </div>
    </div>
  )
}
