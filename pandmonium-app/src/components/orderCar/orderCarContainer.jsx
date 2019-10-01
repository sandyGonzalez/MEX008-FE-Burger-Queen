import React,{Component} from 'react';
import Sidebar from '../sidebar/Sidebar'
import PayOrder from '../orderCar/payOrder';
import Orders from '../orderCar/Orders';
import AddNotes from '../orderCar/AddNotes';


class OrderCarContainer extends Component{
    render(){
        return(
        <div>
            <Sidebar/>
            <p>Mesa 1</p> 
            <PayOrder/>
            <Orders/> 
            <AddNotes/> 
            <button>Mandar a Cocina</button>
            </div>
            )
        }
    }
    
    export default OrderCarContainer;