//import redux actions
import {update,update2} from './slices/test_slice';

import openSocket from "socket.io-client";
const ENDPOINT = "http://localhost:5001";
const socket = openSocket(ENDPOINT, {
     transports: ['websocket'] // you need to explicitly tell it to use websockets
     }); 


const socket_test = openSocket(`${ENDPOINT}/test`);
const Client_handle = require("./Client_handle");

const raw_function_test = (data)=>{window.alert(data)};

console.log(socket_test.nsp,"is test socket");


//define actions here - connect server listening strings - to redux actions
const test = new Client_handle("test",socket_test,update);
const test2 = new Client_handle("test2",socket,update2);
const test3 = new Client_handle("test3",socket,raw_function_test);





const Actions={test,test2,test3};
export default Actions;
