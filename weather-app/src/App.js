import {Route, Switch } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/Dashboard";
import Favorite from "./components/Favorite";
import NavigationBar from "./features/NavigationBar";
import About from './components/About'

function App() {
  return (
      <div className="App">
        <NavigationBar />
        <div className="content">
          <Switch>
           <Route path="/Dashboard" exact component={Dashboard}/>
           <Route path="/Favorite" exact component={Favorite}/>
           <Route path="/About" exact component={About}/>
          </Switch>
        </div>
      </div>
  );
}

export default App;
