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
                <CardContainer badWizards={this.props.badWizards} />
                <CardContainer goodWizards={this.props.goodWizards} />
            </div>
        )
    }
}
export default DisplayWizards;
