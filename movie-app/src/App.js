import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./_App.scss";
import Home from "./Home";
import FilmInfo from "./Page/FilmInfo";
import Trailer from "./Page/Trailer";
import ListFilmPage from "./Page/ListFilmPage";
require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={FilmInfo} />
          <Route path="/:id/trailer" component={Trailer} />
          <Route path="/:genres" component={ListFilmPage} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
