import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Products from './components/ProductsComponent';
import {SERVICES} from './shared/services';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            services: SERVICES
        };
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/" color="danger" >AllGlassNoBreaks</NavbarBrand>
                </div>
                </Navbar>
                <Products services={this.state.services} /> 
            </div>
        );
    }
}

export default App;
