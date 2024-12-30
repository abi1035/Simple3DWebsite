import { useState, useEffect } from "react"
import 'animate.css';

export default function ProductName({color,environmentButton}){
    const [product, setProduct] = useState('')
    const [price,setPrice]=useState('')
    const [animationKey, setAnimationKey] = useState(0)

    

    useEffect(() => {
        if(color === 'Blue'){
            setProduct('Skate Old Skool Elijah Berle Shoe')
            setPrice('90 CAD$')
        }else if(color=='Green'){
            setProduct('Lowland ComfyCush Shoe')
            setPrice('125 CAD$')
        }else if(color=='Black'){
            setProduct('Old Skool Shoe')
            setPrice('110 CAD$')
        }
        setAnimationKey(prev => prev + 1)

    }, [color]) // Dependency array ensures this runs only when color changes

    return(
        <>
        <div key={animationKey} className={`${!environmentButton ? '':'productNameComponent'} animate__animated animate__backInRight`} >
            <h1>{product}</h1>
            <h3>{price}</h3>
        </div>
        
        </>
    )
}