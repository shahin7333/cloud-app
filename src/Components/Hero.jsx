import React from 'react'
import image from '../Assets/image-bio.png'

const Hero = () => {
  return (
   <div className='w-full h-screen flex flex-col sm: justify-between px-4'>
     <div className='grid md:grid-cols-2 max-w[1240px] m-auto'>
     <div>
<img className='w-full' src={image} alt="" />
        </div>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='sm: text-4xl md:text-5xl font-bold'>Biometric Security</p>
            <p className='sm: text-5xl md:text-6xl font-bold mt-2 text-sky-500'>Concept</p>
            <p className='mt-3'>Biometrics refers to digitally encoding physical attributes of a user to gain access to data.</p>
            <button className='mt-8 bg-sky-500 p-4 rounded-tl-lg rounded-br-lg font-bold text-white hover:bg-sky-600'>Supplier Directory</button>
        </div>
       
    </div>
   </div>
  )
}

export default Hero