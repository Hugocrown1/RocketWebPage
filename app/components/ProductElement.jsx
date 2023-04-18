export default function ProductElement({img, name, price}){
    return(
        <div className="items-center mt-3 bg-red-500 pb-7 mb-12">
            <img className="" src={img} alt="Hacia compra del tarro" />
            <div className="flex items-stretch justify-between px-2">
                <p><b>{name}</b></p> 
                <p><b>${price}</b></p>
            </div>
        
        </div> 
    )
}