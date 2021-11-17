import './App.css';
import LandingPage from './features/LandingPage';
import { Switch , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/home" component />
     </Switch>
    </div>
  );
}

export default App;
