# re-socket-dux (alpha build - not yet auto installing or fancy yet)

how to install:

git clone this repo;

in the root project folder
```
cd server
npm install
cd..
cd client
npm install
```


adding better automation and more explination soon.

this is a skeleton of a react project - the goal of which is to be a single one step install (like create-react-app)...
...but with the socket server and client model as basis instead of just the front end;

so this has the connecting socket server code wired in.
(this is still untested on other machines) 




starting dev:

two consoles

a:
```
cd server
npm run dev
  ```
b:
```
cd client
npm start
```


making a client handle

in client/actions.js

```
//import redux actions
import {update,update2} from './slices/test_slice';

import openSocket from "socket.io-client";
const ENDPOINT = "http://localhost:5001";
const socket = openSocket(ENDPOINT, {
     transports: ['websocket'] // you need to explicitly tell it to use websockets
     }); 

const Client_handle = require("./Client_handle");

//define actions here - connect server listening strings - to redux actions

// const handle = new Client_handle(<string>listen_label, <socket>socket, <redux action> action);

const test = new Client_handle("test",socket,update);
const test2 = new Client_handle("test2",socket,update2);



//you export actions as an object
const Actions={test,test2};
export default Actions;
```
useage:

```
//example component makes a button - and sets a handler to it
import React,{useEffect } from "react";
import Use_handles from "../../Handles.js";
const handles = Use_handles();

function Test() {
     return ( <div>
     <button onClick={()=>handles.test2.send("data")}>press</button>
     </div>);
}
export default Test;

```




making a server handle

make a new javascript file in the actions folder: 
```

//require the server_handler.
const Server_handle = require("../server_handle");

//define some action here: can be anything 


//Server_handle takes a string name - what it listens for, and a callback - for when it hears that data.
//any data return in the call back will be sent to the client with the same tag


const action_test = new Server_handle("test",(data)=>{
     console.log("handle data heard", data);
     //or db call or whatever
     const make_some_data = {
          message2:"succes: check server console"
     }
     return make_some_data;
})

//export the action
module.exports = action_test;

```


