import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import DisplayWizards from "./Components/DisplayWizards";

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
    this.getArmy()
    console.log('mounting', this.state)
  } 

  getGoodWizards = (body) => {
    axios.get('/api/goodWizards', body).then(res => {
      this.setState({
        goodArr: res.data
      })
      console.log('get good wizards', res.data)
      console.log('get good wiz arr', this.state.goodArr)
    })
  }

  getBadWizards = (body) => { 
    axios.get('/api/badWizards', body).then(res => {
     this.setState({
        badArr: res.data
      })
    })
  }

  addToArmy = (wizard) => {
    axios.post(`/api/addToArmy/`, wizard).then(res => {
      this.setState({
        army: res.data
      })
    })
  }

  getArmy = (body) => { 
    axios.get('/api/getArmy', body).then(res => {
     this.setState({
        army: res.data
      })
    })
  }

  killWizard = (id) => {
    axios.delete(`/api/killWizard/${id}`).then(res => {
      this.setState({
        army: res.data
      })
    })
  }

  render(){
    console.log('app.render', this.state)

  return (
    <div className="App">
      <Header/>
      <DisplayWizards 
      badWizards={this.state.badArr}
      goodWizards={this.state.goodArr}
      army={this.state.army}
      addToArmy={this.addToArmy}
      />
    </div>
  );
}
}

export default App;
