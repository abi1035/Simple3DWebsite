import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Colors from './Colors.jsx'
import CompanyName from './CompanyName.jsx'
import ProductName from './ProductName.jsx'
import { useState,useEffect } from 'react'
import Size from './Size.jsx'
import Rating from './Rating.jsx'
import Modify from './Modify.jsx'

export default function App(){
    const [color,setColor]=useState('Blue')
    const [activeSize, setActiveSize] = useState(null);
    const [modifyMenu,setModifyMenu]=useState(true)
    
    
    // Environment Props
    const [environmentButton,setEnvironmentButton]=useState(false)
    const [activeEnvironmentMapButton,setActiveEnvironmentMapButton]=useState(0)
    const backgrounds = [0, 1, 2, 3, 4, 5];



    

    

    
    function handleClick(event)
    {
        setColor(event.target.value)
        
        
    }


    // SIZE FUNCTION
    function handleSizeClick(event){
        setActiveSize(event.target.value)
    }


    // MODIFY MENU BUTTON
    function handleModify(){
        setModifyMenu(!modifyMenu)
    }

    //  ENVIRONMENT OPTION BUTTON
    function handleEnvironmentChange(){
        setEnvironmentButton(!environmentButton)

        if(modifyMenu==true){
            setModifyMenu(false)
        }
    }


    // BACKGROUND CHANGE NUMBERS  BUTTON
    function handleBackgroundMapChange(event){
        setActiveEnvironmentMapButton(event.target.value)
    }

//     useEffect(() => {
//     if(modifyMenu === true) {
//         setModifyMenu(false);
//     }
// }, [environmentButton]);


    


return (
    <>
    <CompanyName/>


    <div class="parent">
        <div class="canvasDiv">
            <Canvas
            shadows={true}
            style={{ width: '100%', height: '100%', position:'fixed', top:'0px',left:'0', touchAction:'none'}}
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
               position:[4, 10, 19],   
            } }

            >
                <Experience environmentButton={environmentButton} activeEnvironmentMapButton={activeEnvironmentMapButton} modifyMenu={modifyMenu} color={color} />
            </Canvas>
        </div>
        
        <div class="productNameDiv">
            <ProductName environmentButton={environmentButton} color={color}/>
        </div>

        {!environmentButton && (<>
        <div class="div3"><Size activeSize={activeSize} handleSizeClick={handleSizeClick} /></div>
        <div class="colorsDiv"><Colors color={color} handleClick={handleClick}/></div>
        </>)}
 

        {/* <div class="div5"><Rating color={color}/></div> */}

        <div class="div6">
            <Modify activeEnvironmentMapButton={activeEnvironmentMapButton} handleBackgroundMapChange={handleBackgroundMapChange} modifyMenu={modifyMenu} backgrounds={backgrounds} handleModify={handleModify} environmentButton={environmentButton} handleEnvironmentChange={handleEnvironmentChange} />
        </div>
    </div>
    
    
        

        

        
            
        
    
    
    
    

    </>
)
}
