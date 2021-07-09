//import React, {useEffect, useState} from 'react';
//import { useDispatch, useStore} from 'react-redux';
import { useEffect } from 'react';
import {select_test} from '../../slices/test_slice';
import { useSelector } from 'react-redux';
import './main_window.css';

function Main_window(props) {
 //   const store = useStore();
     const test_data = useSelector(select_test);
     console.log(test_data,"in main window");
     useEffect(()=>{console.log(test_data,"yay!")},[test_data])
    return(<div className="main_window">
        <div className = "main_window_head">
             skeleton react project(title)
        </div>
        <div className="main_window_body">                    
               skeleton react project (body)<br/>
               
               message: {test_data.message}
               <br/>
               responce:{JSON.stringify(test_data.responce)}


        </div>


        </div>
    
    )



}

    export default Main_window;