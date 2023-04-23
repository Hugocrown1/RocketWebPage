import React from 'react'

import rocketTarro from "../../../public/tarro_clean.png";
import rocketTarro2 from "../../../public/demo.png";
import rocketTarro3 from "../../../public/demo2.png";

import Phrase from '@/app/components/Phrase';




export default function RocketTarroPage ()  {
  return (
   <div className='grid grid-flow-col-dense gap-2' style={{gridTemplateColumns: '60% 40%'}}>
      <div className="grid grid-cols-2 grid-rows-2 gap-1 ml-20 mb-10">
        <img className="object-cover w-full h-full" src={rocketTarro.src} alt="Demo del tarro" />
        <img className="object-cover w-full h-full" src={rocketTarro2.src} alt="Demo del tarro" />
        <img className="object-cover w-full h-full" src={rocketTarro3.src} alt="Demo del tarro" />
      </div>
      <div className='text-left flex flex-col'>
        <div className='grid grid-cols-2 mb-6' style={{gridTemplateColumns: '80% 20%'}}>
          <h2 className='text-4xl'><b>ROCKET TARRO</b></h2>
          <span className='text-3xl'>$420</span>
        </div>
        
        <div className='grid grid-cols-2'>
          <span className='text-xl'>COLOR DE LA MANIJA:</span>
          <div class="w-9 h-9 rounded-full bg-blue-500"></div>
          
        </div>
      </div>
  </div>
  )
}
