import React from 'react'

const Card = (props) => {
    if (props.wizard) 
    return (
        <div className='cards'>
            <p>Name: {props.wizard.name}</p>
            <p>House: {props.wizard.house}</p>
            <p>Special Ability: {props.wizard.special_ability}</p>
            <img src={props.wizard.image} alt=''/>
            <div>
                {props.onDelete&&<button onClick={props.onDelete}>Kill</button>}
                {props.onLike&&<button onClick={props.onLike}>Like</button>}
            </div>
        </div>
    )
else {
    return (
        <div>Loading....</div>
    )
}
}
export default Card;


