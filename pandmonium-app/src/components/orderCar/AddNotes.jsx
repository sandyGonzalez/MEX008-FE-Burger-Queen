import React,{Component} from 'react';
import './index.scss';
import ImgAgregar from '../../assets/img/imgAgregar.png'


class AddNotes extends Component{
    
    render(){
        return(
            <div>
            <h5>Añadir Notas extras</h5>
            <figure className = "btn-add">
                <button ><img src={ImgAgregar} alt="icono para agregar notas"/></button>
            </figure>
            </div>
            
        )
    }
}



export default AddNotes;