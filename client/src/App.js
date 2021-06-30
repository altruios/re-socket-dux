import React,{useEffect } from "react";
import openSocket from "socket.io-client";
import { useDispatch } from 'react-redux';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import main_window from "./pages/main_window/main_window";
import test_window from "./pages/test_window/test_window";

//endpoinnt to server websocket io
const ENDPOINT = "http://localhost:5001";
function App() {
 const dispatch = useDispatch();

 useEffect(() => {
    const socket = openSocket(ENDPOINT);
    socket.emit("test", "I can send to you?");
    socket.on("test", data=>{
      console.log("I can hear you!",data);
    })
}, []); //this happens once
   return (
    <Router>    
      <div className="App"> 
        <Switch>
        <Route path="/" exact component={main_window}/>
        <Route path="/test" exact component={test_window}/> 
        <Route path="" exact />
        </Switch>
    </div>
    </Router>

  );
}

export default App;