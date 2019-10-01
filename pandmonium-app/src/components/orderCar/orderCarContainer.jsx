import React,{Component} from 'react';
import Sidebar from '../sidebar/Sidebar'
import PayOrder from '../orderCar/payOrder';
import Orders from '../orderCar/Orders';
import AddNotes from '../orderCar/AddNotes';
import './index.scss';


class OrderCarContainer extends Component{
    render(){
        return(
        <div className = "orderCarContainer">
            <Sidebar/>
            <PayOrder/>
            <Orders/> 
            <AddNotes/> 
            <div className="buttonOrder">
                <button>Mandar a cocina</button>
            </div>
            </div>
            )
        }
    }
    
    export default OrderCarContainer;