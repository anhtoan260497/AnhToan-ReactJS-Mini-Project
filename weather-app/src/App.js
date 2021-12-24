import {Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Dashboard from "./features/Content/Page/Dashboard";
import Favorite from "./features/Content/Page/Favorite";
import NavigationBar from "./features/NavigationBar";
import About from './features/Content/Page/About'
import clsx from "clsx";
import { useSelector } from "react-redux";
import Search from "./features/Content/Page/Search";

function App() {
  
  const isDay = useSelector((state) => state.isDay.isDay);

  return (
      <div className="App">
        <NavigationBar />
        <div className={clsx("content",{
          'dark-bg' : !isDay ? true : false
        })}>
          <Switch>
           <Route path="/Dashboard" component={Dashboard}/>
           <Route path="/Search" component={Search}/>
           <Route path="/Favorite"  component={Favorite}/>
           <Route path="/About" component={About}/>
           <Redirect from='/' to='/Dashboard' />
          </Switch>
        </div>
      </div>
  );
}

export default App;
