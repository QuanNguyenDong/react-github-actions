import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello world</p>
      </header> */}
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}

export default App;
