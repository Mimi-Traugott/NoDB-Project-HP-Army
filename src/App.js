import React, {Component} from 'react';
import './App.css';
import CardContainer from './Components/CardContainer';
import Header from './Components/Header';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allWizards = []
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

  addToArmy = () => {
    axios.post('/api/addToArmy').then(res => {
      this.setState({
        army: res.data
      })
    })
  }

  killWizard = () => {
    axios.delete('/api/killWizard').then(res => {
      this.setState({
        army: res.data
      })
    })
  }

  render(){
  return (
    <div className="App">
      <Header/>
      <CardContainer wizards={this.state.goodArr}/>
      <CardContainer wizards={this.state.badArr}/>
    </div>
  );
}
}

export default App;
