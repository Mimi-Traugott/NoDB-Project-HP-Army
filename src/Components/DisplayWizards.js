import React, {Component} from 'react'
import CardContainer from './CardContainer'
import Army from './Army'

class DisplayWizards extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <div className="displayWizard">
                <CardContainer wizards={this.props.badWizards}
                addToArmy={this.props.addToArmy} />
                <CardContainer wizards={this.props.goodWizards}
                addToArmy={this.props.addToArmy} />
                </div>
                <div>
                <Army 
                army={this.props.army}
                killWizard={this.props.killWizard}/>
                </div>
            </div>
        )
    }
}
export default DisplayWizards;
