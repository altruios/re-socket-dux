import React,{useEffect } from "react";
import { useDispatch } from 'react-redux';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import main_window from "./pages/main_window/main_window";
import test_window from "./pages/test_window/test_window";
import Use_handles from "./Handles.js";
//endpoinnt to server websocket io
function App() {
     const dispatch = useDispatch();
     useEffect(() => {

          const handles = Use_handles();
          handles.set_dispatch(dispatch);
          console.log(handles)

          console.log("use effect - now testing handles.test");
          handles.test.listen();
          handles.test.send({foo:"foo", bar:"bar"});     

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