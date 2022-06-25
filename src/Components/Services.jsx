import React from 'react'
import {EyeIcon,FingerPrintIcon,VolumeUpIcon} from '@heroicons/react/outline'

const Services = () => {
  return (
   <div className='mb-4'>
    <div>
        <h1 className='text-center md:text-4xl font-bold mb-8 mx-4 sm: text-2xl'>Main types of Biometrics</h1>
    </div>
     <div className='grid md:grid-cols-4 grid-cols-1 text-center md:mx-12 sm: mx-4'>
      <div className='bg-sky-300 py-4 rounded-br-xl rounded-tl-xl'>
        <h1 className='text-lg font-bold flex justify-center text-white'>Iris<EyeIcon className='w-5 mx-2'/></h1>
        <p className='px-4 text-white text-sm mt-2 text-justify'>What is iris in biometric?
Image result for iris biometrics
Iris recognition or iris scanning is the process of using visible and near-infrared light to take a high-contrast photograph of a person's iris.</p>
      </div>
      <div className='bg-sky-300 py-4 rounded-br-xl rounded-tl-xl'>
        <h1 className='text-lg font-bold flex  justify-center text-white'>Fingerprints <FingerPrintIcon className='w-5 mx-2'/></h1>
        <p className='px-4 text-white text-sm mt-2  text-justify'>Fingerprints are virtually unique to every individual, consistent across a lifetime and are mostly ubiquitous. </p>
      </div>
      <div className='bg-sky-300 py-4 rounded-br-xl rounded-tl-xl'>
        <h1 className='text-lg font-bold text-white flex justify-center'>Voice<VolumeUpIcon className='w-5 mx-2'/></h1>
        <p className='px-4 text-white text-sm mt-2 text-justify'>Voice biometrics is the science of using a person's voice as a uniquely identifying biological characteristic in order to authenticate them.</p>
      </div>
      <div className='bg-sky-300 py-4 rounded-br-xl rounded-tl-xl'>
        <h1 className='text-lg font-bold text-white'>Facial</h1>
        <p className='px-4 text-white text-sm mt-2 text-justify'>A facial recognition system uses biometrics to map facial features from a photograph or video. It compares the information with a database of known faces to find a match.</p>
      </div>
     
    </div>
   </div>
  )
}

export default Services
