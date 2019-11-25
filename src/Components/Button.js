import React from 'react'

function Button (props){
    return(
        <div>
        <button onClick={props.addToArmy}>Enlist To Your Army</button>
        <button onClick={props.nextWizard}>Next Recruit</button>
        </div>
    )
}
export default Button;