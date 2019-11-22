import React, {Component} from 'react';
import './App.css';
import CardContainer from './Components/CardContainer';
import Header from './Components/Header';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      goodArr: [],
      badArr: [],
      army: []
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
    console.log(this.state)
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
