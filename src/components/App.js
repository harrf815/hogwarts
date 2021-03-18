import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from './HogsContainer'


class App extends Component {
  state = {
    name: false,
    weight: false,
    greased: false,
    hogs: hogs
  }

  onGreasedClick = () => {
    //! toggle greased
    this.setState({ greased: !this.state.greased });
    //! if other options are active, turn them off
    if (this.state.name) this.setState({ name: false })
    if (this.state.weight) this.setState({ weight: false })
    const greasedPigs = this.state.hogs.filter(hogs => {
        return hogs.greased
    })
    this.setState({
        hogs: greasedPigs
    })
  }

  onNameClick = () => {
    //! toggle name(sort)
    this.setState({ name: !this.state.name });
    //! if other options are active, turn them off
    if (this.state.greased) this.setState({ greased: false })
    if (this.state.weight) this.setState({ weight: false })
    const namePigs = this.state.hogs.slice().sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()){
        return -1 
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()){
        return 1 
      }
      return 0 
    })
    console.log(namePigs)
    this.setState({
      hogs: namePigs
    })
  }

  onWeightClick = () => {
    //! toggle weight(sort)
    this.setState({ weight: !this.state.weight });
    //! if other options are active, turn them off
    if (this.state.greased) this.setState({ greased: false })
    if (this.state.name) this.setState({ name: false })
    const weightPigs = this.state.hogs.slice().sort((a,b) => {
      return a.weight - b.weight 
    })
    this.setState({
      hogs: weightPigs
    })
  }

  render() {

    return (
      <div className="App">
        <Nav
          name={this.state.name}
          weight={this.state.weight}
          greased={this.state.greased}
          onGreasedClick={this.onGreasedClick}
          onNameClick={this.onNameClick}
          onWeightClick={this.onWeightClick}
        />
        <HogsContainer 
          name={this.state.name}
          weight={this.state.weight}
          greased={this.state.greased} 
          hogs={this.state.hogs}
        />
      </div>
    );
  }
}

export default App;
