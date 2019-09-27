import React, {Component} from 'react';

class MenuItem extends Component {
    render(){
        return(
            <button><img className="iconMenu" src={this.props.item.icon} alt={this.props.item.id}/></button> 
        );
    }
}

export default MenuItem;