import React,{useEffect} from "react";
import './App.css';
import Header from './Header';
import './Header.css'
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Signin from './Signin';
import { auth } from "./Firebase";
function App() {
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('The User IS >>>',authUser);

      if(authUser){
        //User Logged in

      }
      else{
        //User is Logged Out
      }
    })
  
  }, [])
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Signin">
            <Signin />
          </Route>
          <Route path="/check">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
