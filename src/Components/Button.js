import React from 'react'

function Button (props){
    return(
        <div>
        <button onClick={props.addToArmy}>Add To Your Army</button>
        <button onClick={props.nextWizard}>Next</button>
        </div>
    )
}
export default Button;