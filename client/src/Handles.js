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
          
          //auto listen for all handles
          listen_all:()=>{
               for(const p in _handles){
                    if(_handles[p]?.type=="handle"){
                         _handles[p].listen();
                    }
               }
          },

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

class Handle { //
     constructor(action,socket,respondsTo){

          this.action = action;
          this.type="handle";
          this.socket=socket; //socket ref
          this.dispatch=null; //set  with the main set_dispatch in the exported object container
          this.respondsTo=respondsTo.type; //action type of redux action
          console.log(this.respondsTo);
          this.respond=this.respond.bind(this);
       }
     
     set_dispatch(d){
          console.log("handle is setting dispatch", d,"was dispatch sent to class member function")
          this.dispatch=d}
     respond(data){
          console.log("responding");
          console.log(this);
          console.log(data);
          console.log("well, what are we working with here");
          this.dispatch({type:this.respondsTo,payload:(data)});
     }
     listen(){
          console.log("listen called");
          if(this.socket){
          console.log("this is listening now", this);
          this.socket.on(this.action,this.respond);
          }
     }
     send(data){     
          this.socket.emit(this.action,data);

     }
     set_socket(socket){
          console.log("test - setting socket in handle class");
          this.socket=socket}
}

export default Use_handle;