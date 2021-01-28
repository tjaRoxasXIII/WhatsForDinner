import './App.css';
import Login from '../components/login';
import Signup from '../components/signup';
import Home from './Home';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {
  const isSignedIn = useSelector(state => state.auth.isSignedIn)
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!!token) {
      autoSignIn(token)  
    }  
  });

  const autoSignIn = (token) => {
    fetch('http://localhost:3000/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
              debugger
              if (data.id) {
                dispatch({ type: 'SIGN_IN', payload: data})
                return isSignedIn
              }
      })
  }



  return (
    <Router>
    <div className="App">

      <Switch>
        <Route exact path="/home" component={Home} >
          {isSignedIn ? null : <Redirect to="/" />}
        </Route>
        <Route exact path="/" component={Login}>
          {isSignedIn ? <Redirect to="/home" /> : null }
        </Route>
        <Route exact path="/signup" component={Signup} >
          {isSignedIn ? <Redirect to="/home" /> : null}
        </Route>
      </Switch>
        
      <footer className="footer">
      © 2021 Taylor Allen
      </footer>
    </div> 
    </Router>
  );
}

export default App;
