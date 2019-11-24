import React from 'react'


export default function Army (props) {
    console.log('army prop', props)
    return (
        <div>
            {props.army.map(el => (
                    <div key={el.id}>{el.name}</div>)
                )}
        </div>
    )
}

