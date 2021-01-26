import './App.css';
import Login from '../components/login';
import Signup from '../components/signup'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <footer className="footer">
      © 2021 Taylor Allen
      </footer>
    </div> 
    </Router>
  );
}

export default App;
