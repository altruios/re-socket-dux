
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
          this.dispatch=d}
     respond(data){
          console.log("responding");
          console.log(data);
          this.dispatch({type:this.respondsTo,payload:(data)});
     }
     listen(){
          if(this.socket){
          this.socket.on(this.action,this.respond);
          }
     }
     send(data){ 
          console.log("sending - this.action,data", this.action,data)    
          this.socket.emit(this.action,data);

     }
     set_socket(socket){
          this.socket=socket}
}
module.exports=Handle;