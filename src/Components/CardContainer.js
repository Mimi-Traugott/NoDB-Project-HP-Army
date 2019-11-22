import React, {Component} from 'react'
import GoodWizards from './GoodWizards'
import BadWizards from './BadWizards'
import axios from 'axios';


class CardContainer extends Component {
    constructor(){
        super()
        this.state = {
            goodArr: [],
            badArr: []
        }
    }
    componentDidMount(){
        this.getGoodWizards()
        this.getBadWizards()
    }
    getGoodWizards = () => {
        axios.get('/api/goodCharacters').then(res => {
            this.setState({
                goodArr: res.data
            })
        })
    }
    getBadWizards = () => { 
        axios.get('/api/badCharacters').then(res => {
            this.setState({
                badArr: res.data
            })
        })
    }

    render(){
        console.log(this.state.goodArr)
        console.log(this.state.badArr)
        return(
            <div>
                <GoodWizards />
                <BadWizards />

            </div>
        )
    }

}
export default CardContainer;