import {output} from "./slices/server_sender"
import openSocket from "socket.io-client";
import {update} from './slices/test_slice';
const ENDPOINT = "http://localhost:5001";

const socket = openSocket(ENDPOINT, {
     transports: ['websocket'] // you need to explicitly tell it to use websockets
     }); 
function Use_handle(){
     const test = new Handle("test",socket,update);
     const _handles={
          test,
          
          // connect dispatch
          set_dispatch:(d)=>{
               console.log("setting dispatch: should hit once!");
               for(const p in _handles){
                    console.log(p, "is property?");
                    if(_handles[p]?.type=="handle"){
                         console.log("theres a hit")
                         _handles[p].set_dispatch(d);
                    }
               }
          }
     }

     return _handles;
}

class Handle { //
     constructor(action,socket,respondsTo){

          this.action = action;
          this.type="handle";
          this.socket=socket;
          this.dispatch=null;
          this.respondsTo=respondsTo.type;
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
          const that = this;
          this.socket.on(this.action,this.respond);
          }
     }
     send(data){this.dispatch(output([this.action,{data},this.socket]))}
     set_socket(socket){
          console.log("test - setting socket in handle class");
          this.socket=socket}
}

export default Use_handle;