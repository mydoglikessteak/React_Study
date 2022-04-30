import logo from "./logo.svg";
import "./App.css";
import { Component, render } from "react";

class App extends Component {
  state = {
    name: "Vinicius",
    counter: 0,
  };

  test = () => {
    this.setState({ name: "Alexandre" });
  };

  testCounter = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
    this.setState({ name: "Vinicius" });
  };

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p onClick={this.test}>
            {name} {counter}
          </p>
          <a
            onClick={this.testCounter}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
