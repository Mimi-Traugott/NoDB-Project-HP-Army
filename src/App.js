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
    console.log("mounting", this.state);
  }

  getGoodWizards = body => {
    axios.get("/api/goodWizards", body).then(res => {
      this.setState({
        goodArr: res.data
      });
      console.log("get good wizards", res.data);
      console.log("get good wiz arr", this.state.goodArr);
    });
  };

  getBadWizards = body => {
    axios.get("/api/badWizards", body).then(res => {
      this.setState({
        badArr: res.data
      });
    });
  };

  addToArmy = wizard => {
    axios.post(`/api/addToArmy`, wizard).then(res => {
      this.setState({
        army: res.data
      });
    });
  };

  nameArmy = nameOfArmy => {
    axios.post(`/api/nameArmy`, {nameOfArmy}).then(res =>{
      console.log('nameArmyTest', res.data)
      this.setState({army:res.data})
    })

  }

  getArmy = body => {
    axios.get("/api/getArmy", body).then(res => {
      this.setState({
        army: res.data
      });
    });
  };

  killWizard = id => {
    console.log('deletewiz', id)
    axios.delete(`/api/killWizard/${id}`).then(res => {
      this.setState({
        army: res.data
      });
    });
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
    console.log("app.render", this.state);

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
