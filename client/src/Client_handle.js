const { isAsyncThunkAction } = require("@reduxjs/toolkit");

class Handle { //
     constructor(action,socket,respondsTo){

          this.action = action;
          this.type="handle";
          this.socket=socket; //socket ref
          this.dispatch=null; //set  with the main set_dispatch in the exported object container
          this.respondsTo=respondsTo.type; //action type of redux action
          console.log(this.respondsTo,"is responds to");
          this.respond=this.respond.bind(this);
          this.raw_response = respondsTo;
          console.log("raw_responce is", this.raw_response);

       }

     set_dispatch(d){
          this.dispatch=d}
     respond(data){
          console.log("responding");
          console.log(data);
          const regex = /[a-z]\/[a-z]/g
          console.log(this.respondsTo?.match(regex));
          this.respondsTo?.match(regex)?
               this.dispatch({type:this.respondsTo,payload:(data)}):
               this.raw_response(data);
     }
     listen(){
          if(this.socket){
          this.socket.on(this.action,this.respond);
          }
     }
     send(data){ 
          console.log("sending - this.action,data", this.action,data)  
          console.log("this socket is",this.socket);  
          console.log("namespace is",this.socket.nsp);
          console.log(data);
          this.socket.emit(this.action,data);

     }

     set_socket(socket){
          this.socket=socket}
}
module.exports=Handle;