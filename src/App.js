

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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import DashboardPage from "./Components/Dashboard/DashboardPage/DashboardPage";
import BookBikes from "./Components/Home/BookBikes/BookBikes";
import Footer from "./Components/Footer/Footer";

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
          <PrivateRoute path="/bookBikes/:bikeId">
            <BookBikes/>
          </PrivateRoute>
            <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/dashboardPage'>
            <DashboardPage/>
          </PrivateRoute>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
