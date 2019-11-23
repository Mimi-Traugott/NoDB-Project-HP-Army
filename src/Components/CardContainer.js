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
        this.setState({currentWizardIndex: this.state.currentWizardIndex+1})
    }

    render() {
        return(
            <div>
                <Card wizard={this.props.wizards[this.state.currentWizardIndex]}/>
                <Button handleCardChange={this._handleCardChange}/>


                {/* {this.props.wizards.map((element, index) => { return (
                <Card wizard={this.props.wizards[this.state.currentWizardIndex]}/>)})} */}
                {/* {this.props.wizards.filter((element, index)=> 
                    element[index] === this.state.currentWizardIndex
                    .map(element =>
                        <Card wizard={element} />
                    ))} */}
                        
                {/* // <button handleCardChange={this._handleCardChange}>test</button>
            //    <p>hi</p> */}
            </div>
        )
    }
}

export default CardContainer;