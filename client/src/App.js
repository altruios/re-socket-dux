import React,{useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import main_window from "./pages/main_window/main_window";
import Use_handles from "./Handles.js";
import { select_test,select_test2 } from "./slices/test_slice";
const handles = Use_handles();

//endpoinnt to server websocket io
function App() {
     const dispatch = useDispatch();
     
     const data = useSelector(select_test);
     const data2 = useSelector(select_test2);
     const [state,setState]=useState([data,data2]);
     useEffect(() => {
          //connnect
          handles.set_dispatch(dispatch);
          handles.listen_all();
          //tests
          
          handles.test.send(state[0])
          handles.test2.send(state[1])

     },[dispatch,state]); //this happens once
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