import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./_App.scss";
import Home from "./Home";
import FilmInfo from "./Components/FilmInfo";
require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={FilmInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
