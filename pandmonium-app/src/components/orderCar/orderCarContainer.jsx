import React,{Component} from 'react';
import Sidebar from '../sidebar/Sidebar'
import PayOrder from '../orderCar/payOrder';
import Orders from '../orderCar/Orders';
import AddNotes from '../orderCar/AddNotes';


class OrderCarView extends Component{
    render(){
        return(
        <div>
            <Sidebar/>
            <p>Mesa 1</p> /*El numero de mesa debería cambiar dinamicamente*/
            <PayOrder/> /*Componente donde pagar orden que debe contener un cuadrito con estado de verde a gris */
            <Orders/> /*Componente de la orden que se va a llenar dinamicamente y contiene las imagenes donde despliega y un bote de basura*/
            <AddNotes/> /*Componente para agregar notas */
            <button>Mandar a Cocina</button>/  *Aqui jalamos el boton */
            </div>
            )
        }
    }
    
    export default OrderCarView;