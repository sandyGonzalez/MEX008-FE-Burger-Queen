import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import Menu from '../../components/Menu/index';
console.log(IconMenu);

class MenuView extends Component {
    state = {
        data : IconMenu
    }
    render(){
        return(
            <section>
                <Menu icons={this.state.data}/>
            </section>
        );
    }
}

export default MenuView;