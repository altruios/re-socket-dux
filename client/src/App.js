import React,{useEffect } from "react";
import { useDispatch  } from 'react-redux';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import main_window from "./pages/main_window/main_window";
import handles from "./Handles.js";

//endpoinnt to server websocket io
function App() {
     const dispatch = useDispatch();
     
     useEffect(() => {
          //connnect
          handles.set_dispatch(dispatch);
          handles.listen_all();
          

     },[dispatch]); //this happens once
     return (
     <Router>    
          <div className="App"> 
          <Switch>
          <Route path="/" exact component={main_window}/>
          </Switch>
     </div>
     </Router>
     );
}
export default App;