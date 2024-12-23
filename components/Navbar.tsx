import Link from 'next/link'
import React from 'react'


export const Navbar = () => {
  return (
    <div>

<nav className='fixed top-0 w-full  z-20' style={{
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 90%, rgba(255, 255, 255, 0.1) 100%)',
  backdropFilter: 'blur(10px)', 
  
}}>
  <div className='max-w-7xl h-16 mx-auto flex items-center justify-between px-4'>
    
    {/* Left side: Logo and Name */}
    <div className='flex items-center space-x-3'>
      <img src="/Assets/loogoo.png" alt="logo" className='w-20 h-20 object-contain' />
      <h1 className='font-bold text-lg'>Smart Disposal</h1>
    </div>

    {/* Right side: Link */}
    <div className='flex items-center space-x-5 mr-10'>
    <Link href={"./About"} className='text-lg font-medium'>
      About Us
    </Link>
    <Link href={"./Contact"} className='text-lg font-medium'>
      Contact
    </Link>
    </div>

  </div>
</nav>

    </div>
  )
}
