import React from 'react'
import security from '../Assets/security.png'

const Trust = () => {
  return (
    <div>
        <div className='text-center mt-8 mb-4'>
            <h1 className='text-4xl font-bold'>Security <span className='text-sky-500 text-6xl'>?</span></h1>
        </div>
        <div className='grid md:grid-cols-2 flex justify-center items-center'>
<div className='text-xl sm: m-4 md:m-12 text-justify'>
    <p>Biometrics scanners are hardware used to capture the biometric for verification of identity. These scans match against the saved database to approve or deny access to the system. In other words, biometric security means your body becomes the “key” to unlock your access.</p>
</div>
<div>
    <img src={security} alt="" />
</div>
        </div>
    </div>
  )
}

export default Trust