import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog'
import { createContext, useState } from 'react';
import Contact from './components/Contact/Contact';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="main-container container" >
      <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
        {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <Header/>
        <Switch>
          <Route path='/home' >
            <Home />
          </Route>
          <Route path='/destination' >
            <Destination />
          </Route>
          <Route path='/blog' >
            <Blog />
          </Route>
          <Route path='/contact' >
            <Contact />
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
          <PrivateRoute path='/book/:id' >
            <Book />
          </PrivateRoute>
          
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
      
    </div>
  );
}
export default App;
