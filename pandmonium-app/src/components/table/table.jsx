import React from 'react';
import '../table/table.scss';
import {Link} from 'react-router-dom';


class TableList extends React.Component{
   state ={
       changeColorGreen: true
   }
   changeColor = (x)=>{
       this.setState({changeColorGreen: !this.state.changeColorGreen})
      
   }
   render(){
       if(this.state.changeColorGreen){
           return(
               <button style={{backgroundColor: (this.state.changeColorGreen) ? '#C4C4C4' : "#42FF00"}}
                onClick={this.changeColor}><Link to="/Menu">{this.props.number}</Link>
               
               </button>
           )
       }
       else{
           return(
               <button style={{backgroundColor: (this.state.changeColorGreen) ? '#C4C4C4' : "#42FF00"}} onClick={this.changeColor}>{this.props.number}
               </button>
           )
       }
    }
}
export default TableList;