import React from 'react'

function GoodWizards(props){
    return(
        <div>
            <p>{props.goodGuys.name}</p>
            <p>{props.goodGuys.house}</p>
            <p>{props.goodGuys.special_ability}</p>
            <p>{props.goodGuys.house.patrons}</p>
            <p>{props.goodGuys.house.catch_phrase}</p>
            <p>{props.goodGuys.image}</p>
        </div>
    )
}
export default GoodWizards

