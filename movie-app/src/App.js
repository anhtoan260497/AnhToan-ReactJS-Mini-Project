import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./_App.scss";
import Home from "./Home";
import FilmInfo from "./Components/FilmInfo";
import Trailer from "./Components/Trailer";
require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={FilmInfo} />
          <Route path="/:id/trailer" component={Trailer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
