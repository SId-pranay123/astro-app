import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import GoTo from './pages/AdvacnceSearch';



function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/signin' component={GoTo} exact />
    </Switch>
    
    </Router>
  );
}

export default App;
