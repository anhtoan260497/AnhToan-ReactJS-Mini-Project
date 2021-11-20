import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './features/Homepage';
import LandingPage from './features/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/home" component={Homepage} />
     </Switch>
    </div>
  );
}

export default App;
