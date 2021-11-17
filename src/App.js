

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Home from './Components/Home/Home/Home';
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
import Register from "./Components/Resgister/Register";
import Explorebikes from "./Components/Explorebikes/Explorebikes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        
        <Router>
        <Header/>
          <Switch>
            <Route exact path ='/'>
              <Home></Home>

            </Route>
            <Route exact path ='/home'>
              <Home></Home>

            </Route>
            <Route exact path='/explorebikes'>
            <Explorebikes/>
          </Route>
            <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          </Switch>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
