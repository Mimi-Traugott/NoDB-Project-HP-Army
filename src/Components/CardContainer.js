import React, {Component} from 'react'
import Card from './Card'

class CardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
           currentWizardIndex: 0
        }
    }

    render() {
        return(
            <div>
                <Card wizard/>
               <p>hi</p>
            </div>
        )
    }
}

export default CardContainer;