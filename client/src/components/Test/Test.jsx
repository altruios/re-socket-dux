import React from "react";


function Test(props) {
     const handle = props.handle;
     const data =props.data;
     const message = props.message;


     return ( 
          <div>
               <button onClick={()=>handle.send(data)}>{message}</button>
     </div>
     );
}
export default Test;