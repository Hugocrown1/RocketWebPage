import React from 'react'

import rocketTarro from "../../../public/tarro_clean.png";
import rocketTarro2 from "../../../public/demo.png";
import rocketTarro3 from "../../../public/demo2.png";

import Phrase from '@/app/components/Phrase';




export default function RocketTarroPage ()  {
  return (
   <div className='grid grid-flow-col-dense gap-2' style={{gridTemplateColumns: '60% 40%'}}>
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        <img className="object-cover w-full h-full" src={rocketTarro.src} alt="Demo del tarro" />
        <img className="object-cover w-full h-full" src={rocketTarro2.src} alt="Demo del tarro" />
        <img className="object-cover w-full h-full" src={rocketTarro3.src} alt="Demo del tarro" />
      </div>
      <div className='text-left flex flex-col'>
        <div className=''>
          <h2 className='text-4xl pb-6'><b>Rocket Tarro</b></h2>
          <h2 className='text-4xl pb-6'><b>$420</b></h2>
        </div>
      </div>
  </div>
  )
}
