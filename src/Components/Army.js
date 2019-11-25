import React, {Component} from 'react'
import axios from 'axios'

export default class Army extends Component {
    constructor (props){
        super(props)
        this.state = {
            updatedArmyName: ''
        }
    }
    updateArmyName = newName => {
        axios.put('/api/yourArmyName', newName).then(res =>
            this.setState({
                updatedArmyName :res.data
            }
        ))
    }
    render (){   
    return (
        <div className= 'army'>
            <h1>Army of {this.props.army.name}</h1>
            {this.props.army.wizArr && this.props.army.wizArr.map(el => (
                    <div key={el.id}>{el.name}
                    &nbsp;&nbsp;
                    <img className='deleteicon' src='https://img.icons8.com/cotton/2x/delete-sign--v2.png' alt ='' 
                    onClick={()=>this.props.killWizard
                    (el.id)}/>
                    </div>) 
                )}
        </div>
    )
    }
}