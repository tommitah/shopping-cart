import React, { Component } from "react";

// ---Stateless Funcional Component---
// Stateless functional component example, navbar ei vaadi omaa statea, joten tämä toimii.
// Muuten sama kuin class-component, mutta ilman render metodia ja this.props ei toimi.
// Object Destructuring: Jos halutaan, sen sijasta että annetaan NavBar funktiolle parametri props ja viitataan counttereihin
// props.totalCounters, voidaan destrukturoida props syntaksilla { totalCounters }, jos halutaan kiinni vain tämä yksi.

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NavBar {""}
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
