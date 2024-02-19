"use client"
import React, { useState } from 'react'

const SearchInput = ({setkey}) => {

   function handleChange(e){
     setkey(e.target.value)
     console.log(e.target.value)
   }
   
  return (
    <div className='mt-5 flex items-center justify-center '>
      <input type="text" 
      className='outline-none border-2 w-[300px] h-[40px] p-4 rounded-md focus:ring-green-200' placeholder='Search'
      onChange={handleChange}/> 
      <button className=' w-[80px] h-[40px] text-white bg-blue-900 rounded-md ml-2' >Save</button>
    </div>
  )
}


export { SearchInput}
