import React from 'react'

function BadWizards(props){
    return(
        <div>
            <p>{props.badGuys.name}</p>
            <p>{props.badGuys.house}</p>
            <p>{props.badGuys.special_ability}</p>
            <p>{props.badGuys.house.patrons}</p>
            <p>{props.badGuys.house.catch_phrase}</p>
            <p>{props.badGuys.image}</p>
       </div>
    )
}
export default BadWizards