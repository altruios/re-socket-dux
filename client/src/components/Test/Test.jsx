import React,{useEffect } from "react";
import Use_handles from "../../Handles.js";
const handles = Use_handles();

//endpoinnt to server websocket io
function Test() {
     useEffect(() => {

     },[]); //this happens once
     return ( 
          <div>
               <button onClick={()=>handles.test2.send("does this work")}> does this work?</button>
     </div>
     );
}
export default Test;