
import 'animate.css'
import { useState } from "react";

export default function Colors({handleClick,color}){
    
   const [open,setIsOpen]=useState(false)
    
   
       
   
       function toggleSize(){
           setIsOpen(!open)
       }
   

    
    return(
        <>
        <div className="wholeProductColorDiv animate__animated animate__fadeInUp">
        <h3>Model:</h3>
        <div className="productColorDiv">
            <button onClick={handleClick} className={`productColorButton blueButton ${color === 'Blue' ? 'active' : ''}`} value='Blue' ><img src="./vans-blue.jpg"/></button>
            <button onClick={handleClick} className={`productColorButton redButton ${color === 'Green' ? 'active' : ''}`} value='Green'><img src="./vans-green.jpg"/></button>
            <button onClick={handleClick} className={`productColorButton blackButton ${color === 'Black' ? 'active' : ''}`} value='Black'><img src="./vans-black.jpg"/></button>
        </div>
        </div>
        </>
    )
}