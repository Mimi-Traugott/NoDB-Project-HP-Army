import React, {Component} from 'react'
import CardContainer from './CardContainer'

class DisplayWizards extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className="App">
                <CardContainer wizards={this.props.badWizards} />
                <CardContainer wizards={this.props.goodWizards} />
            </div>
        )
    }
}
export default DisplayWizards;
