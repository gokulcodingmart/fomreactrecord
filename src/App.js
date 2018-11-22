import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import { HookMapInterceptor } from "tapable";
import Counters from "./components/counters.jsx";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  increment = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(index);
    this.setState({ counters });
  };

  delete = counterId => {
    // console.log("delete clicked", counterID);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  reset = () => {
    console.log("reset clicked");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            onDelete={this.delete}
            onIncrement={this.increment}
            onReset={this.reset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
