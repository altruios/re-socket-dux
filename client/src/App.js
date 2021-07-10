import React,{useEffect } from "react";
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
     useEffect(() => {
          handles.set_dispatch(dispatch);
          //handles.test.listen();
          handles.listen_all();
          handles.test.send(data)
          handles.test2.send(data2)

     },[]); //this happens once
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