import { BrowserRouter,Switch,Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
require('dotenv').config() 

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
