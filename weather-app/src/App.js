import './App.css';
import LandingPage from './features/LandingPage';
import { Switch , Route} from 'react-router-dom'
import Homepage from './features/Homepage';

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
