import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import DisplayWizards from "./Components/DisplayWizards";
import NameYourArmy from "./Components/NameYourArmy";

import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      goodArr: [],
      badArr: [],
      army: {name: ''},
    };
  }

  componentDidMount() {
    this.getGoodWizards();
    this.getBadWizards();
    this.getArmy();
  }

  getGoodWizards = body => {
    axios.get("/api/goodWizards", body).then(res => {
      this.setState({
        goodArr: res.data
      });
    }).catch(err => console.log(err))
  };

  getBadWizards = body => {
    axios.get("/api/badWizards", body).then(res => {
      this.setState({
        badArr: res.data
      });
    }).catch(err => console.log(err))
  };

  addToArmy = wizard => {
    axios.post(`/api/myArmy`, wizard).then(res => {
      this.setState({
        army: res.data
      });
    });
  };

  nameArmy = nameOfArmy => {
    axios.post(`/api/firstArmyName`, {nameOfArmy}).then(res =>{
      this.setState({army:res.data})
    })
  }

  getArmy = body => {
    axios.get("/api/allArmy", body).then(res => {
      this.setState({
        army: res.data
      });
    });
  };

  killWizard = id => {
    axios.delete(`/api/avadakedavra/${id}`).then(res => {
      this.setState({
        army: res.data
      });
    }).catch(err => console.log(err))
  };

  handleInputChange(evt) {
    this.setState({army:{...this.state.army, name: evt.target.value }})
  }
  handleKeyPress(evt) {
    if (evt.key === "Enter"){
      this.nameArmy(this.state.army.name)
    }
  }

  render() {
    return (
      <div className="backApp">
        <Header />
        <NameYourArmy className='armyName'>
          <h2>Name Your Army</h2>
          <input 
          onChange={evt => this.handleInputChange(evt)} 
          onKeyPress= {evt => this.handleKeyPress(evt)}
          type="text" />
        </NameYourArmy>
        {this.state.armyName}
        <DisplayWizards
          badWizards={this.state.badArr}
          goodWizards={this.state.goodArr}
          army={this.state.army}
          addToArmy={this.addToArmy}
          killWizard={this.killWizard}
        />
      </div>
    );
  }
}
export default App;
