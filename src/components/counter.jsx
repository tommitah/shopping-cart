import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCounter()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  // Event handler!
  // See constructor!
  // Kun käyttää nuolifunktiota, ei ole tarpeellista kutsua luokan konstruktoria ja base luokan kon. (super();)
  // eikä myöskään "bindata" funktio-oliota (this.handleIncrement = this.handleIncrement.bind(this);)
  // HUOM!! funktiot javascriptissä on myös olioita, tämän takia voit kutsua bind() metodia eventhandlerille.
  handleIncrement = () => {
    console.log("Increment clicked", this);
  };

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
