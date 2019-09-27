import React from 'react';
import { withRouter } from 'react-router-dom';
import Prueba2 from '../views/prueba2';

class Prueba extends React.Component {
    render(){
        console.log(this.props.location.pathname)
        switch(this.props.location.pathname){
            case '/burgers':
                return (<Prueba2/>)
            case '/hotdogs':
                return (<p>hotdogs</p>)
        }
        /*return(            
        )*/
    }
}

export default withRouter(Prueba);