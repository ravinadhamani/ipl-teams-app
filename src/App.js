import './App.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from './Components/Home/'
import AddTeam from './Components/AddTeam/'
import AddPlayer from './Components/AddPlayer'
import TeamDetails from './Components/TeamDetails';
import PlayerDetails from './Components/PlayerDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  
  return (
    <div>

      <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
          <Route path="/addteam" element={<ProtectedRoute><AddTeam /></ProtectedRoute>} />
          <Route path="/addplayer" element={<AddPlayer />} />
          <Route path="/teamdetails" element={<TeamDetails />} />
          <Route path="/playerdetails" element={<PlayerDetails />} />
        </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;



/* import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import firebase from './firebase'
import Home from './Components/Home/'
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { auth } from "../firebase";


export const App = () => {
    const [isAuth, setIsAuth] = useState()
    const auth = firebase.auth()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        })
    }, [isAuth])

    return(
        <div className="App">
            <Home />
           
                <Route to="/signIn" component={Login} />
                <Route to="/signup" component={Signup} />
            
        </div>
    )
};
export default App; */