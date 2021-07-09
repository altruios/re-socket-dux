const {io} = require('./socket_serve.js');
const fs = require('fs');

console.log("handle test scripted called");
// handle functions
   const handle_test = (data)=>{
     
     console.log("handle data heard", data);
   }


   
const returnObject = {
     handle_test
   }
   module.exports = returnObject;