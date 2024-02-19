'use client'
import React from 'react'
import { useParams } from 'next/navigation'
const Page = () => {
    const route= useParams()
  return (
    <div className='mt-5 flex items-center justify-center'>
      <h1>This is {route.preview}</h1>
    
    </div>
  )
}

export default Page
