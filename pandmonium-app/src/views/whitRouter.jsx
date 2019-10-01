import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuView from '../views/MenuView/index'
import OrderCarContainer from '../components/orderCar/orderCarContainer'
import CustomContainer from '../components/Custom/CustomContainer'

class WhitRouter extends React.Component {
    render(){
        console.log(this.props.location.pathname)
        switch(this.props.location.pathname){
            case '/Menu':
                return(<MenuView/>)
            case '/burgers':
                return (<OrderCarContainer/>)
            case '/hotdogs':
                return (<CustomContainer/>)
            case '/pizzas':
                return(<p>pizzas</p>)
            case '/salads':
                return(<p>salads</p>)
            case '/desserts':
                return(<p>desserts</p>)
            case '/drinks':
                return(<p>drinks</p>)
            default:
                return (<p>404</p>) 
        }
        
    }
}

export default withRouter(WhitRouter);