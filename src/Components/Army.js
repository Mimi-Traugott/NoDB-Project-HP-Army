import React, {Component} from 'react'
import axios from 'axios'


export default class Army extends Component {
    constructor (props){
        super(props)
        this.state = {
            updatedArmyName: '',
            editing: false
        }
    }
    updateArmyName = newName => {
        axios.put('/api/updateArmyName', newName).then(res =>
            this.setState({
                updatedArmyName :res.data
            }
        ))
    }
    render (){   
        console.log('army', this.props)  
    return (
        <div className= 'army'>
            <h1>Army of {this.props.army.name}</h1>
            {/* {this.props.army.name ? this.props.army.name : <button onClick={}> </button>} <button>Change name</button> */}
            {this.props.army.wizArr && this.props.army.wizArr.map(el => (
                    <div key={el.id}>{el.name}
                    &nbsp;&nbsp;<img className='deleteicon' src='https://img.icons8.com/cotton/2x/delete-sign--v2.png' alt ='' 
                    onClick={()=>this.props.killWizard
                    (el.id)}/>
                    </div>) 
                    // <span onclick={delete}>X</span>
                )}
        </div>
    )
    }
}

// if editing is false, you want to display this.props.army.name display button, that states change name
//if props editing is true, show input box value this.props.army.name with button that says update. once you click update, you'll go back to editing is false
//move delete method to army

