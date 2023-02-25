import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./navbar";
import Cart from "./cart";
import {  Routes, Route } from "react-router-dom";

import About from "./about";
import Home from "./home";
import Contact from "./contact";
import ProductDetails from "./productDetails";
class Pp extends Component {
  state = {
    products: [
      { id: 1, name: "burger", count: 3 },
      { id: 2, name: "Coola", count: 0 },
      { id: 3, name: "potato", count: 5 },
    ],
  };
  handleDelete = (eman) => {
    const products = this.state.products.filter((p) => p.id !== eman.id);
    this.setState({ products });
  };

  handleReset = () => {
    //clone
    let products = [...this.state.products];
    //edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //set state
    this.setState({ products });
  };

  IncrementHandler = (eman) => {
    //clone
    const products = [...this.state.products];
    const index = products.indexOf(eman);
    products[index] = { ...products[index] };

    //Edit
    products[index].count++;

    //setstate
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          productscount={this.state.products.filter((p) => p.count > 0).length}
        />
        <Routes>
          <Route path="/products/:id/:name?" render={props=>(<ProductDetails products={this.state.products} {...props} />)} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/"  element={<Home />} />

          <Route
            path="/cart"
            render={props => { return <Cart 
                products={this.state.products}
                onIncrement={this.IncrementHandler}
                onDelete={this.handleDelete}
                onReset={this.handleReset}
              />}}
            
          />
        </Routes>
        {/*
              <Cart
               products={this.state.products}
              onIncrement={this.IncrementHandler}
              onDelete={this.handleDelete}
    onReset={this.handleReset}/>*/}
      </React.Fragment>
    );
  }
}

export default Pp;
