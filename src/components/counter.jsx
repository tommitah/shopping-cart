import React, { Component } from "react";

class Counter extends Component {
  // ---Props vs State---
  // Props sisältää dataa jota annetaan komponentille, State sisältää dataa joka on lokaalia tai yksityistä(private)
  // ko. komponentille.
  // "The component that _owns_ a piece of the state, should be the one _modifying_ it."
  state = {
    value: this.props.value,
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // HUOM! Nuolifunktiodeklaraatio funktioille tekee tästä litaniasta ylimääräisen.
  // constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // Event handler!
  // See constructor!
  // Kun käyttää nuolifunktiota, ei ole tarpeellista kutsua luokan konstruktoria ja base luokan kon. (super();)
  // eikä myöskään "bindata" funktio-oliota (this.handleIncrement = this.handleIncrement.bind(this);)
  // HUOM!! funktiot javascriptissä on myös olioita, tämän takia voit kutsua bind() metodia eventhandlerille.
  handleIncrement = () => {
    // Reactissa ei kosketa stateen suoraan, esim. this.state.value++; (Voi olla vanhaa tietoa!)
    // Sen sijaan passataan muutos metodille joka updatee DOMin, jotta muutos renderöidään oikein
    // setState ottaa sisäänsä olion.
    this.setState({ value: this.state.value + 1 });
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
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
