# re-socket-dux (alpha build - not yet auto installing or fancy yet)

how to use:

git clone -> npm init. 

adding better automation and more explination soon.

this is a skeleton of a react project - the goal of which is to be a single one step install (like create-react-app)...
...but with the socket server and client model as basis instead of just the front end;

so this has the connecting socket server code wired in.
(this is still untested on other machines) 

```
installing should be:
git clone;
then:
cd server
npm install
cd..
cd client
npm install
```


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

in client/handles.js
```
const handle = new Handle(string:lable,socket:socket.io/socket refference, function:redux action)
```
example:
```
import openSocket from "socket.io-client";
import {update} from './slices/test_slice';
const ENDPOINT = "http://localhost:5001";

const socket = openSocket(ENDPOINT, {
     transports: ['websocket'] // you need to explicitly tell it to use websockets
     }); 
function Use_handle(){
     //define handles here
     const test = new Handle("test",socket,update);// label, ref to socket, and most important: redux action
     
     const _handles={
          //handles go here
          test,
          
          // connect dispatch
          set_dispatch:(d)=>{
               console.log("setting dispatch: should hit once!");
               for(const p in _handles){
                    if(_handles[p]?.type=="handle"){
                         _handles[p].set_dispatch(d);
                    }
               }
          }
     }
     //returning this object with list of handles, and function to connect dispatch to every handle
     return _handles;
}
```
useage:

```
import Use_handles from "./Handles.js";
const handles = Use_handles();

function App() {
     const dispatch = useDispatch();
     useEffect(() => {
          const handles = Use_handles();//
          handles.set_dispatch(dispatch); //sets all the dispatches for events to fire correctly
          //call individual handles
          handles.test.listen(); //connects the socket.on function
          
          handles.test.send("whatever data you want"); //emit a message to handles.test's server connection
          
          //or call listen on all handles
          handles.listenAll(); 

     }, []);

    return /*jsx*/
```




making a server handle

make a new javascript file in the actions folder: 
```

//require the server_handler.
const Server_handle = require("../server_handle");

//define some action here: can be anything - any data being returned will be sent through to the client on the responce of the handle on the client
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


