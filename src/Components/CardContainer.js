import React, {Component} from 'react'
import Card from './Card'
import Button from './Button'


class CardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
           currentWizardIndex: 0
        }
        this._handleCardChange = this._handleCardChange.bind(this)
    }

    _handleCardChange(){
        this.setState({
            currentWizardIndex: this.state.currentWizardIndex+1
        })
        this.props.addToArmy(this.props.wizards[this.state.currentWizardIndex])
    }
    render() {
        console.log('card container wiz', this.props.wizards)
        console.log('card container current wix index',this.state.currentWizardIndex)
        return(
            <div className='wizard'>
                <Card wizard={this.props.wizards[this.state.currentWizardIndex]}/>
                <Button handleCardChange={this._handleCardChange}/>
            </div>
        )
    }
}

export default CardContainer;