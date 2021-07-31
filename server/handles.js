const glob = require( 'glob' )
const path = require( 'path' );
const actions=[];
  glob.sync( './actions/**/*.js' ).forEach( function( file ) {
     actions.push(require( path.resolve( file ) ));
   });
// handle functions
const _handles = {
     name_spaces:["/","/test"], //add name spaces for autolistening
     ...actions,
    //auto listen for all handles
    listen:(path)=>{
     for(const p in _handles){
          if(_handles[p]){
               if(_handles[p].type=="handle"){
                    if(_handles[p].name_space==path){
                         _handles[p].listen();
                    }
               }
          }
     }
    },
    listen_all:()=>{
          for(const p in _handles){
               if(_handles[p]){
                    if(_handles[p].type=="handle"){
                         _handles[p].listen();
                    }
               }
          }
     },
     connect_socket:(path,socket)=>{
          for(const p in _handles){
               if(_handles){
                    if(_handles[p].type=="handle"){
                         if(_handles[p].name_space==path){
                              _handles[p].connect_socket(socket);
                         }
                    }          
               }
          }
     }
}

console.log("HANDLES LOADED",actions.length);

module.exports = _handles;


