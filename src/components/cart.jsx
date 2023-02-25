import React, { Component } from 'react';
import Eman from './eman';

class Cart extends Component {
 

    render() { 
        return <h1>cart</h1>;
        // return (<React.Fragment>
        //     <h1>prod1</h1>
        //     {/* <button onClick={this.props.onReset} className='btn btn-danger'>Reset</button>
        //     {this.props.products.map(eman=>(
        //         <Eman key={eman.id} 
        //         eman={eman}

        //         onDelete={this.props.onDelete}
        //         onIncrement={this.props.onIncrement}
        //         />
        //     ))} */}
        //     </React.Fragment>);
    }
}
 
export default Cart;