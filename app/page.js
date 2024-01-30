"use client"

import Header from '@/Components/Header'
import Nav from '@/Components/Nav'
import { MyContext } from '@/Helper/Context'

import React, { useContext } from 'react'



const page = () => {
  const user = useContext(MyContext)

  return (
    <div>
    
    
      <Header/>
      
    </div>
  )
}

export default page
