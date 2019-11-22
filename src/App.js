import React, {Component} from 'react';
import './App.css';
// import Army from './Components/Army';
// import ArmyMember from './Components/ArmyMember';
import CardContainer from './Components/CardContainer';
// import CharacterInfo from './Components/CharacterInfo'
import Header from './Components/Header';
// import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      army: []
    }
  }


  
  render(){
  return (
    <div className="App">
      <CardContainer/>
      <Header/>

   
    </div>
  );
}
}

export default App;
