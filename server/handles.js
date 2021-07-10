const glob = require( 'glob' )
const path = require( 'path' );
const actions=[];
  glob.sync( './actions/**/*.js' ).forEach( function( file ) {
     actions.push(require( path.resolve( file ) ));
   });
// handle functions
const _handles = {
     ...actions,
    //auto listen for all handles
    listen_all:()=>{
          for(const p in _handles){
               if(_handles[p]?.type=="handle"){
                    _handles[p].listen();
               }
          }
     },
     connect_socket:(socket)=>{
          for(const p in _handles){
               if(_handles[p]?.type=="handle"){
                    _handles[p].connect_socket(socket);
               }          
          }
     }
}

console.log("HANDLES LOADED",actions.length);

module.exports = _handles;


