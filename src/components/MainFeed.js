import React from 'react'
import Request from './Request'

export default function MainFeed() {
  return (
    <div className='border rounded-t-3xl bg-[white] pr-4 pl-4 pt-4 mt-4 '>
      <div className='text-base font-semibold'>For you</div>
      <div className='text-sm font-medium'>Contact and negotiate your conditions </div>

      <div className='flex flex-col items-center'>
        <Request
        distination="Mata Mandir"
        distance="2 Km" />
        <Request
        distination="New Market"
        distance="3.5 Km" />
        <Request
        distination="DB"
        distance="6 km" />
        <Request
        distination="Nehru Nagar"
        distance="4 km" />
        <Request
        distination="Nehru Nagar"
        distance="4 km" />
    
      </div>
    </div>
  )
}
