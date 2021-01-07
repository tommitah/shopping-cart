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

  // Event handler!
  // See constructor!
  // Kun käyttää nuolifunktiota, ei ole tarpeellista kutsua luokan konstruktoria ja base luokan kon. (super();)
  // eikä myöskään "bindata" funktio-oliota (this.handleIncrement = this.handleIncrement.bind(this);)
  // HUOM!! funktiot javascriptissä on myös olioita, tämän takia voit kutsua bind() metodia eventhandlerille.
  handleIncrement = (product) => {
    // Reactissa ei kosketa stateen suoraan, esim. this.state.count++;
    // Sen sijaan passataan muutos metodille joka updatee DOMin, jotta muutos renderöidään oikein
    // setState ottaa sisäänsä olion.
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // Rajapintaistaa alkuperäisen handlerin. Ohjelma osaa antaa handlerille parametrin, joka voi olla esim. tuotteen tunniste.
  // ällö tapa kirjoittaa tämä toiminnallisuus, älä tee ylimääräisiä wrappereita, joita kutsutaan renderissä oikean funktion sijasta.
  // Sen sijaan käytä nuolifunktiota suoraan render() funktion sisällä ts. inline function.
  // doHandleIncrement = () => {
  //  this.handleIncrement({ id: 1 });
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

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
