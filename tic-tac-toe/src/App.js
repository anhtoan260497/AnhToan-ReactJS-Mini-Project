import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import LandingPage from './pages/LandingPage';
import PlayerType from './pages/PlayerType';
console.disableYellowBox = true;

function App() {
  console.disableRedBox= true;
  const disable = useSelector(state => state.game.disable)

  return (
    <div className="App" style={{backgroundColor: disable ? 'rgba(45,45,45,50%)' : 'white',transition:'background-color 1s ease'}} >
      <h1 className="title"  >Tic Tac Toe</h1>

      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/computer'/>
        <Route path='/player'  component={PlayerType}/>
      </Switch>


    </div>
  );
}

export default App;
