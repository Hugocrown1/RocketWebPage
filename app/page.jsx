import rocketTarro from "../public/tarro.jpg";
import rocketTarro2 from "../public/tarro2.jpg";
import tarroDemo from "../public/demo.png";
import tarroDemo2 from "../public/demo2.png";
import tarroDemo3 from "../public/tarros.jpg";
import tarroVenta from "../public/tarro_clean.png";
import ProductElement from "./components/ProductElement";
import Phrase from "./components/Phrase";




export default function HomePage() {
  
return(
        <>
        <div className="flex flew-row justify-center pt-12">
                <img className="scroll-opacity transform transition  -translate-y-8 duration-1000 ease-in-out transition-delay-500 w-1/4 h-1/4 mx-6" src={rocketTarro.src} alt="Tarro de frente" />
                <img className="transform transition -translate-y-8 duration-1000 ease-in-out transition-delay-500 w-1/4 h-1/4 mx-6" src={rocketTarro2.src} alt="Tarro por detrás" />    
        </div>
        <div className="flex flex-col justify-center items-center text-center">
                <Phrase phrase="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <p className="text-clip text-2xl w-1/2 text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum esse nobis laudantium blanditiis quasi quidem ratione aspernatur quas eos, neque, in sequi autem atque consectetur natus animi commodi ea.</p> 
                <div className="flex flex-row justify-center my-6">

                        <img className="w-1/5 " src={tarroDemo.src} alt="Demo del tarro" />
                        <img className="w-1/3 mx-6 aspect-video" src={tarroDemo3.src} alt="Demo del tarro" />
                        <img className="w-1/5" src={tarroDemo2.src} alt="Demo del tarro" /> 

                </div>
                <Phrase phrase="Lorem ipsum dolor sit amet consectetur"/>
                <ProductElement img={tarroVenta.src} name="Rocket Tarro" price={490}/>
        </div>
        </>

    
)
}