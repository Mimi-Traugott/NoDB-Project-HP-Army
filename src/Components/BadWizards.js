import React, {Component} from 'react'

function BadWizard(props){
    return(
        <div>
            <p>{props.badGuys.name}</p>
            <p>{props.badGuys.house}</p>
            <p>{props.badGuys.specialability}</p>
            <p>{props.badGuys.house.patrons}</p>
            <p>{props.badGuys.house.catchphrase}</p>
            <p>{props.badGuys.image}</p>

       </div>
    )
}
export default BadWizard