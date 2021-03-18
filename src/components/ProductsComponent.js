import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                {
                    id: 0,
                    name: '180 degree shower',
                    image: '/images/shower180.jpg',
                    // description
                },
                {
                    id: 1,
                    name: '90 degree shower',
                    image: '/images/shower90.jpg',
                    // description
                },
                {
                    id: 2,
                    name: 'wine display case',
                    image: '/images/winedisplay.jpg',
                    // description 
                }
            ]
        };
    }

    render() {
        const products = this.state.units.map(unit => {
            return (
                <div className="col">
                    <img src={unit.image} alt={unit.name} />
                    <h2>{unit.name}</h2>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {products}
                </div>
            </div>
        );
    }
}

export default Products;