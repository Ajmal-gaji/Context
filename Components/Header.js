import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'
import Nav from './Nav'

const Header = () => {
   const user= useContext(MyContext)
  return (
    <div className='bg-green-400 p-5 flex justify-between'>
    {user}
    <Nav></Nav>
      
    </div>
  )
}

export default Header
