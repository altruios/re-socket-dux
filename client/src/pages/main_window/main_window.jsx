import {select_test} from '../../slices/test_slice';
import { useSelector } from 'react-redux';
import './main_window.css';
import Test from "../../components/Test/Test"
import Handle from '../../Handles';
function Main_window() {
     const test_data = useSelector(select_test);
    return(<div className="main_window">
        <div className = "main_window_head">
        re-socket-dux <br/>
               (react-socket-redux... with nodejs)
                       </div>
        <div className="main_window_body">                    

        message: {test_data.message}<br />
        message2: {test_data.message2}<br />
        message3: {test_data.message3}
               <br/>
               responce:{JSON.stringify(test_data.responce)}<br/>
               response2: {JSON.stringify(test_data.responce2)}
               <Test handle={Handle.test} data={test_data.message} message = "test1" />
               <Test handle={Handle.test2} data={test_data.message2} message = "test2" />
               <Test handle={Handle.test3} data={test_data.message3} message = "test3" />
        </div>


        </div>
    
    )



}

    export default Main_window;