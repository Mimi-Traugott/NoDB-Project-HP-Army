import React, {Component} from 'react'
import GoodWizards from './GoodWizards'
import BadWizards from './BadWizards'
import axios from 'axios';


class CardContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentIndex: 0
        }
        this.handleCharacterChange = this.handleCharacterChange.bind(this)
    }
    handleCharacterChange(){
        this.SetState({currentIndex: this.state.currentIndex+1})
    }

    render(){
        return(
            <div>
                <GoodWizards goodGuys={this.props.wizards[this.state.currentIndex]}/>
                <BadWizards badGuys={this.props.wizards[this.state.currentIndex]}/>

            </div>
        )
    }

}
export default CardContainer;