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
    // console.log(this.state)
  } 

  getGoodWizards = (body) => {
    axios.get('/api/goodWizards', body).then(res => {
      this.setState({
        goodArr: res.data
      })
      // console.log(res.data)
      // console.log(this.state.goodArr)
    })
  }

  getBadWizards = (body) => { 
    axios.get('http://localhost:4041/api/badWizards', body).then(res => {
     this.setState({
        badArr: res.data
      })
    })
  }

  addToArmy = (id, body) => {
    axios.post(`http://localhost:4041/api/addToArmy/${id}`,body).then(res => {
      this.setState({
        army: res.data
      })
    })
  }

  killWizard = (id) => {
    axios.delete(`http://localhost:4041/api/killWizard/${id}`).then(res => {
      this.setState({
        army: res.data
      })
    })
  }

  render(){
  return (
    <div className="App">
      <Header/>
      <DisplayWizards 
      badWizards={this.state.badArr}
      goodWizards={this.state.goodArr}
      />
    </div>
  );
}
}

export default App;
