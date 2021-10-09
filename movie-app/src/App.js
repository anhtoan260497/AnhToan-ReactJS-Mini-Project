import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./_App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Home";
require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
