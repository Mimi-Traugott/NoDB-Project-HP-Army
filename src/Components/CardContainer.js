import React, {Component} from 'react'
import Card from './Card'
import Button from './Button'


class CardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
           currentWizardIndex: 0
        }
        this._addToArmy = this._addToArmy.bind(this)
        this.nextWizard = this.nextWizard.bind(this)
    }

    _addToArmy(){
        this.props.addToArmy
        (this.props.wizards[this.state.currentWizardIndex])
        this.nextWizard()
    }
    nextWizard(){
        this.setState({
        currentWizardIndex: this.state.currentWizardIndex+1
        })
    }
    render() {
        console.log('card container wiz', this.props.wizards)
        console.log('card container current wix index',this.state.currentWizardIndex)
        return(
            <div className='wizard'>
                <Card wizard={this.props.wizards[this.state.currentWizardIndex]}/>
                <Button 
                addToArmy={this._addToArmy}
                nextWizard={this.nextWizard}/>
            </div>
        )
    }
}

export default CardContainer;