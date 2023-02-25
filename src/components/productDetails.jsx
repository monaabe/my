import React from 'react';
const ProductDetails = props => {
    return  (<h1>Details No{props.match.params.id}</h1>) ;
}
 
export default ProductDetails;