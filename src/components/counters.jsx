import React, { Component } from "react";
import Counter from "./counter";

// --- Refaktoroinnit yms muut kommentit.---
// Kun poistetaan Counter listasta, behaviourin _on oltava_ tässä komponentissa (katso kommentti counter.jsx), vaikka nappi itsessään
// on osa Counter-luokkaa.
// Koska this.state on private, ei Counters-luokan child Counter pääse käsiksi tähän dataan, joten käytetään eventtiä.
// Kaikki kommenteissa, koska refaktorointi App luokan mukaan, kaikki statea muokkaava toiminnallisuus tulee olla
// parent-luokassa.
//state = {
//  counters: [
//    { id: 1, value: 0 },
//    { id: 2, value: 0 },
//    { id: 3, value: 0 },
//    { id: 4, value: 0 },
//  ],
//};
//
//handleIncrement = (counter) => {
//  const newCounters = [...this.state.counters];
//  const index = newCounters.indexOf(counter);
//  newCounters[index] = { ...counter };
//  newCounters[index].value++;
//  this.setState({ counters: newCounters });
//};
//
//handleReset = () => {
//  const newCounters = this.state.counters.map((c) => {
//    c.value = 0;
//    return c;
//  });
//
//  this.setState({ counters: newCounters });
//};
//
//handleDelete = (counterId) => {
//  // Ei muokata statea suoraan, vaan luodaan uusi array ilman poistettua osaa, ja annetaan Reactin päivittää state setState:lla.
//  const newCounters = this.state.counters.filter((c) => c.id !== counterId);
//  this.setState({ counters: newCounters }); // HUOM! Jos state-propin nimi on sama kuin constantin pelkkä { counters } riittää.
//};

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters, onAdd } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-secondary btn-sm m-2">
          Add
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
