import React from 'react'

export default function AddRequest() {
  function formSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className=' mr-2 ml-2 mt-4 p-2 rounded-lg relative bg-white'>
      <div className='absolute -top-2 -right-2'><i class="fa-solid fa-plus fa-shake fa-2xl"></i></div>
      <div className='font-medium text-base text-[#22295d]'>RE<i class="fa-solid fa-q fa-beat-fade"></i>UEST</div>
      <form action="" className='flex flex-col' onSubmit={formSubmit}>
        <input className='mt-2 outline-none border-b bg-[#e5e7eb] rounded-full w-[60%] p-1 pl-3  font-medium text-sm' type="text" placeholder='Place' />
        <input className='mt-2 outline-none border-b bg-[#e5e7eb] rounded-full w-[60%] p-1 pl-3 font-medium text-sm' type="number" placeholder='Distance(Km)' />
        <button className='border  mt-2 rounded-2xl bg-[#e5e7eb] font-medium hover:bg-blue-600 hover:text-white'>ASK</button>
      </form>
    </div>
  )
}
