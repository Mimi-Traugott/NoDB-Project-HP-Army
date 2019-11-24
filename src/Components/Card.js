import React from 'react'

const Card = (props) => {

    return (
        <div className = 'cards'>
            <p>{props.wizard.name}</p>
            <p>{props.wizard.house}</p>
            {props.wizard.patronus!=="none"&&<p>{props.wizard.patronus}</p>}
            <div>
                {props.onDelete&&<button onClick={props.onDelete}>Kill</button>}
                {props.onLike&&<button onClick={props.onLike}>Like</button>}
            </div>
        </div>
    )
}

export default Card;


