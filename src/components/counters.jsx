import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // Kun poistetaan Counter listasta, behaviourin _on oltava_ tässä komponentissa (katso kommentti counter.jsx), vaikka nappi itsessään
  // on osa Counter-luokkaa.
  // Koska this.state on private, ei Counters-luokan child Counter pääse käsiksi tähän dataan, joten käytetään eventtiä.
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Event handler called!", counterId);
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
