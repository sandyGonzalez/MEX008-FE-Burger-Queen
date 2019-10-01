import React, {Component} from 'react';
import '../MenuItem/styles.css';

class FoodItem extends Component {
    render(){
        const {icons} = this.props
        console.log(icons)
        const iconItem = icons.filter(i => {
            console.log(`icons id:${i.id}|item: ${this.props.item.type}`)
        return i.id ===  this.props.item.type
        })[0]

        return(
            <button className="cuadro" >
                <img className="iconFood"
                src={iconItem  && iconItem.icon}
                alt={this.props.item.name}
                />
                {this.props.item.name} 
            </button>
        );
    }
}

export default FoodItem;
