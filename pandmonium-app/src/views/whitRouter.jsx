import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuView from '../views/MenuView/index';
import OrderCarContainer from '../components/orderCar/orderCarContainer'


class WhitRouter extends React.Component {
    render(){
        console.log(this.props.location.pathname)
        switch(this.props.location.pathname){
            case '/Menu':
                return(<MenuView/>)
            case '/burgers':
                return (<OrderCarContainer/>)
            case '/hotdogs':
                return (<p>hotdogs</p>)
            case '/pizzas':
                return(<p>pizzas</p>)
            case '/ensaladas':
                return(<p>salads</p>)
            case '/postres':
                return(<p>desserts</p>)
            case '/sodas':
                return(<p>drinks</p>)
            case '/malteadas':
                return(<p>malteadas</p>)
            default:
                return (<p>404</p>) 
        }
        
    }
}

export default withRouter(WhitRouter);