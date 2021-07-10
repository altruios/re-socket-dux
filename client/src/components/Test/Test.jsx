import React,{useEffect } from "react";
import Use_handles from "../../Handles.js";
const handles = Use_handles();

function Test() {
     return ( 
          <div>
               <button onClick={()=>handles.test2.send("does this work")}> does this work?</button>
     </div>
     );
}
export default Test;