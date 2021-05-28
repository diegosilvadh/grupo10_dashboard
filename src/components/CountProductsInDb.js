import React, { Component } from 'react';
import SmallCard from './SmallCard';

const API_PRODUCT = 'http://localhost:3000/api/products';

export default class CountProductsInDb extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            productsCount: [],
            color: "danger",
            titulo: "Productos en la Base de Datos",
            icono: "fas fa-cookie",
        }
    }

    componentDidMount() {
        console.log("Monto")
        fetch(API_PRODUCT)
        .then(res =>{
            return res.json()

        })

        .then(products =>{
           this.setState({productsCount: products.meta})
           console.log(products.meta)
         })

        .catch(error => console.log(error))
        }
        render() {
            const dash  = this.state;
            return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                { dash && (
                    <SmallCard  color={dash.color}
                    titulo={dash.titulo}
                    icono={dash.icono}
                    valor={this.state.productsCount['count']}
                    
                     /> 
                 )}      
            </div>
            </React.Fragment>
        )
       }
    }