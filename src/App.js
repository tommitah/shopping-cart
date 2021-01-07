import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - constructor");
  }

  componentDidMount() {
    console.log("App - mounted");
  }

  handleIncrement = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: newCounters });
  };

  handleDelete = (counterId) => {
    // Ei muokata statea suoraan, vaan luodaan uusi array ilman poistettua osaa, ja annetaan Reactin päivittää state setState:lla.
    const newCounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newCounters }); // HUOM! Jos state-propin nimi on sama kuin constantin pelkkä { counters } riittää.
  };

  handleAdd = () => {
    const index = this.state.counters.length;
    const newCounters = this.state.counters;
    newCounters.push({ id: index + 1, value: 0 });
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
