import './App.css';
import Login from '../components/login';
import Signup from '../components/signup';
import Home from './Home'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login}>
        {localStorage.getItem('token') ? <Redirect to="/home" /> : null }
      </Route>
      <Route exact path="/signup" component={Signup} >
         {localStorage.getItem('token') ? <Redirect to="/home" /> : null}
      </Route>
      <Route exact path="/home" component={Home} >
        {localStorage.getItem('token') ? null : <Redirect to="/" />}
      </Route>
        
      <footer className="footer">
      © 2021 Taylor Allen
      </footer>
    </div> 
    </Router>
  );
}

export default App;
