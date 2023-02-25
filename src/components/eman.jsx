import React, { Component } from 'react';

class Eman extends Component {
   // state = {
     //   name:this.props.eman.name,
       // count:this.props.eman.count


        
     
     getClasses(){
        return this.props.eman.count <= 5 ? "btn btn-warning m-3" : "btn btn-primary m-3";
     };
    // clickHandler=()=>{
     //   console.log(this);
    // }

    render() {
        
        return (
        <div>
        <span>{this.props.eman.name}</span>
        <span className={this.getClasses()}>{this.props.eman.count}</span>
        <button onClick={()=>this.props.onIncrement(this.props.eman)} className='btn btn-primary btn-sm'>+</button>
        <span onClick={()=>this.props.onDelete(this.props.eman)}><i className="fa-solid fa-trash"></i></span>
        </div>
        );
    }
}
    
    
    

 
export default Eman;