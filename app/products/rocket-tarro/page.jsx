import React from 'react'

import rocketTarro from "../../../public/tarro_clean.png";
import rocketTarro2 from "../../../public/demo.png";
import rocketTarro3 from "../../../public/demo2.png";

import Phrase from '@/app/components/Phrase';




export default function RocketTarroPage ()  {
  return (
    <div className='grid grid-cols-2 gap-2'>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full">
          <img className="min-w-0 min-h-0 object-cover " src={rocketTarro.src} alt="Demo del tarro" />
          <img className="min-w-0 min-h-0 object-cover " src={rocketTarro2.src} alt="Demo del tarro" />
          <img className="min-w-0 min-h-0 object-cover " src={rocketTarro3.src} alt="Demo del tarro" />
        </div>
        <div className=''>
          <Phrase phrase="Precio"/>
        </div>
    
    </div>
    
    
  )
}
