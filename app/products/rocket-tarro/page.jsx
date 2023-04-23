import React from 'react'

import rocketTarro from "../../../public/tarro_clean.png";
import rocketTarro2 from "../../../public/demo.png";
import rocketTarro3 from "../../../public/demo2.png";



const colours = [
  {name:'red', rgb:'e63946'},
  {name:'blue', rgb:'3a86ff'},
  {name:'green', rgb:'06d6a0'}, 
  {name:'yellow', rgb:'ffbe0b'},
  {name:'porpol', rgb:'8338ec'} 
  ]

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
          <div className='flex flex-row gap-2'>
            {colours.map(colour => <div key={colour.name}  className=''></div>)}
            
            
          </div>
          
        </div>
      </div>
  </div>
  )
}
