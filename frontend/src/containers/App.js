import './App.css';
import Login from '../components/login';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Login />
      </Switch>
      <footer className="footer">
      © 2021 Taylor Allen
      </footer>
    </div> 
    </Router>
  );
}

export default App;
