import piggy from "../porco.png";
import React from "react";

const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <div className="ui three item menu">
        <a onClick={props.onGreasedClick} className={`${props.greased ? 'active' : ''} item`} value="greased">Sort by Greased</a>
        <a onClick={props.onNameClick} className={`${props.name ? 'active' : ''} item`} value="name">Sort by Name</a>
        <a onClick={props.onWeightClick} className={`${props.weight ? 'active' : ''} item`} value="weight">Sort by Weight</a>
      </div>
      </div>
  );
};

export default Nav;
