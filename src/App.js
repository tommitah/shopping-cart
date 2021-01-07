import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

const App = (props) => {
  const [state, setState] = useState({
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  });

  const handleIncrement = (counter) => {
    const newCounters = [...state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    setState({ counters: newCounters });
  };

  const handleReset = () => {
    const newCounters = state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    setState({ counters: newCounters });
  };

  const handleDelete = (counterId) => {
    // Ei muokata statea suoraan, vaan luodaan uusi array ilman poistettua osaa, ja annetaan Reactin päivittää state setState:lla.
    const newCounters = state.counters.filter((c) => c.id !== counterId);
    setState({ counters: newCounters });
  };

  const handleAdd = () => {
    const index = state.counters.length;
    const newCounters = state.counters;
    newCounters.push({ id: index + 1, value: 0 });
    setState({ counters: newCounters });
  };

  return (
    <React.Fragment>
      <NavBar
        totalCounters={state.counters.filter((c) => c.value > 0).length}
      />
      <main className="container">
        <Counters
          counters={state.counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
