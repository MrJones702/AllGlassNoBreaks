import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Products from './components/ProductsComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/" color="danger" >AllGlassNoBreaks</NavbarBrand>
                </div>
                </Navbar>
                <Products /> 
            </div>
        );
    }
}

export default App;
