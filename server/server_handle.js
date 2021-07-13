class Server_handle{
     constructor(action_name,namespace,response){
          this.type="handle";
          this.respond=this.respond.bind(this);
          this.action=action_name;
          this.socket=null;
          this.response=response;//callback function
          this.name_space=namespace;
     }
     respond(data){
          const transformed_data = this.response(data);
          if(transformed_data){
               this.send(transformed_data);
          }
     }
     listen(){
          if(this.socket){
               this.socket.on(this.action,this.respond);
          }
     }
     send(data){
          this.socket.emit(this.action,data);
     }
     connect_socket(socket){
           this.socket=socket;
     }
}
module.exports = Server_handle;