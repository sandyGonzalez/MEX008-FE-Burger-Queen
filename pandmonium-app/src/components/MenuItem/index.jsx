import React, {Component} from 'react';
import './styles.css';

class MenuItem extends Component {
    render(){
        return(
            <button className="cuadro"><img className="iconFood" src={this.props.item.icon} alt={this.props.item.id}/></button> 
        );
    }
}

export default MenuItem;