import './App.css';
import Home from './pages/Home'
import Biodata from './pages/Biodata'
import Todo from './pages/Todo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          backgroundColor: 'yellow',
          padding: '10px'
        }}>
          <Link to="/">Home</Link>
          <Link to="/biodata">Biodata</Link>
          <Link to="/pokemon">Pokemon</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/biodata">
            <Biodata />
          </Route>
          <Route exact path="/pokemon">
            <Todo />
          </Route>
          <Route path="/pokemon/:index">
            <Todo />
          </Route>
          <Route path="*">
            Sorry page not found...
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
