export default function Rating({color}){

    return (
        <>
        <div className="wholeRatingDiv">
        <h3>Ratings:</h3>
            {color=='Blue' && '5/5 (20,123)'}
            {color=='Green' && '4.2/5 (16,150)'}
            {color=='Black' && '4/5 (11,131 )'}
        </div>
        </>
    )
}