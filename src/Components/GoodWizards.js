import React, {Component} from 'react'

function GoodWizards(props){
    return(
        <div>
            <p>{props.goodGuys.name}</p>
            <p>{props.goodGuys.house}</p>
            <p>{props.goodGuys.specialability}</p>
            <p>{props.goodGuys.house.patrons}</p>
            <p>{props.goodGuys.house.catchphrase}</p>
            <p>{props.goodGuys.image}</p>
        </div>
    )
}
export default GoodWizards

