export default function Modify({activeEnvironmentMapButton,handleBackgroundMapChange,handleModify,handleEnvironmentChange,environmentButton,modifyMenu,backgrounds}){



    return (
        <>  
            <div className="wholeModifyDiv">
            {/* {environmentButton ? '' : <button className={`modifyButton ${modifyMenu?'active':''}`} onClick={handleModify}>Modify</button>} */}
            <button className={`changeEnvironmentButton ${environmentButton ? 'active':''}`} onClick={handleEnvironmentChange} >Change</button>
            {environmentButton ? (
                <div className="backgroundMapChangeButtonDiv" >
                {/* Background change buttons */}
                {backgrounds.map((background)=>(
                <button
                key={background}
                value={background}
                onClick={handleBackgroundMapChange}
                className={`backgroundMapChangeButton ${activeEnvironmentMapButton == background ? 'active' : ''}`}
                >
                    {background+1}
                </button>
           ))}
           </div>):""}
            </div>
        </>
    )
}