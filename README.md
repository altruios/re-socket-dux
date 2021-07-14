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
```js
cd server
npm run dev
  ```
b:
```js
cd client
npm start
```


making a client handle

in client/actions.js

```js
//import redux actions
import {update,update2} from './slices/test_slice';
//import socket.io and client handle
import openSocket from "socket.io-client";
const Client_handle = require("./Client_handle");


const ENDPOINT = "http://localhost:5001";
const socket = openSocket(ENDPOINT); 

//you can define namespaces here
const socket_test = openSocket(`${ENDPOINT}/test`);



//client_handles can take redux actions or function like below:
const raw_function_test = (data)=>{window.alert(data)};


//define actions here - connect server listening strings - to redux actions

// const handle = new Client_handle(<string>label, <socket>socket, <redux action / function> action);
const test = new Client_handle("test",socket_test,update); //alternative socket
const test2 = new Client_handle("test2",socket,update2);
const test3 = new Client_handle("test3",socket,raw_function_test); //alternative reaction



//you export actions as an object
const Actions={test,test2,test3};
export default Actions;
```
useage:

```js
//example component makes a button - and sets a handler to it
import React,{useEffect } from "react";
import Handles from "../../Handles.js";

function Test() {
     return ( <div>
     <button onClick={()=>Handles.test.send("data")}>press</button>
     </div>);
}
export default Test;

```




making a server handle

make a new javascript file in the actions folder: 
```js

//require the server_handler.
const Server_handle = require("../server_handle");

//define some action here: can be any function 


//Server_handle takes a string name - what it listens for, a string name_space, and a callback - for when it hears that data.
//any data return in the call back will be sent to the client with the same tag to the same name_space

//const action = new Server_handle(<string>label,<string>name_space,<function>action)
const action_test = new Server_handle("test","/test",(data)=>{
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


