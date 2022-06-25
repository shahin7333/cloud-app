import React, { useState } from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const[nav,setNav]=useState(false)
    const navIconHandle=()=>{
        setNav(!nav)
    }
  return (
    <div className='w-screen h-[60px] bg-sky-500 fixed drop-shadow-xl'>
       <div className='px-4 flex justify-between items-center w-full h-full'>
           <div className='flex items-center'>
            <h1 className='text-3xl font-bold sm:text-4xl'>LOGO</h1>
           </div>
           <div>
           <ul className='hidden md:flex items-center'>
                <li className='px-3 hover:text-white'>Home</li>
                <li className='px-3 hover:text-white'>About</li>
                <li className='px-3 hover:text-white'>Services</li>
                <li className='px-3 hover:text-white'>Contact</li>
                <li className='px-3 hover:text-white'>Blogs</li>
               
                <button className='sign-btn px-3 py-3 rounded hover:bg-slate-500 hover:text-white'>Sign In</button>
                <button className='sign-btn px-3 py-3 rounded hover:bg-slate-500 hover:text-white'>Sign Out</button>
        
            </ul>
           </div>
           <div className='md:hidden' onClick={navIconHandle}>
           
           {!nav ? <MenuIcon className='w-6'/> : <XIcon className='w-6' />}
           </div>
       </div>
  <ul className={!nav ? 'hidden':'absolute bg-sky-300 w-full px-8 text-end'}>
                <li className='px-3 pb-2'>Home</li>
                <li className='px-3 pb-2'>About</li>
                <li className='px-3 pb-2'>Services</li>
                <li className='px-3 pb-2'>Contact</li>
                <li className='px-3 '>Blogs</li>
              <div className='flex flex-col justify-start mt-1'>
              <button className='sign-btn px-3 py-3 rounded hover:bg-slate-500 hover:text-white'>Sign In</button>
                <button className='sign-btn px-3 py-3 rounded hover:bg-slate-500 hover:text-white'>Sign Out</button>
              </div>
  </ul>
    </div>
  )
}

export default Navbar