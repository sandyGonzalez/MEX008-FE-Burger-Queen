import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MenuItem extends Component {
    render(){
        const component = this.props.item.component;
        return(
            <Link to={{pathname: this.props.item.route, state: {component}}}><button><img className="iconMenu" src={this.props.item.icon} alt={this.props.item.id}/></button></Link>
        );
    }
}


export default MenuItem;