import React, { Component } from 'react';
import SmallCard from './SmallCard';

const API_USER = 'http://localhost:3000/api/users';
const API_PRODUCT ='http://localhost:3000/api/products'

export default class CountUsersInDb extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            usersCount: [],
            colorUser: "primary",
            tituloUser: "Usuarios en la Base de Datos",
            iconoUser: "fas fa-user",
            productsCount: [],
            colorproduct: "primary",
            tituloProduct: "Usuarios en la Base de Datos",
            iconoProduct: "fas fa-user",
        }
    }


    async componentDidMount() {
        await Promise.all ([
            fetch(API_USER)
                .then(res =>{
                    return res.json()

                })
                .then(users =>{
                this.setState({usersCount: users.meta})
                console.log(users.meta)
                }),
                fetch(API_PRODUCT)
                .then(res =>{
                    return res.json()
                })
                .then(products =>{
                   this.setState({productsCount: products.meta})
                   console.log(products.meta)
                 }),
                ]);
        render() {
            const dash  = this.state;
            console.log(dash);
            return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                { dash && (
                    <SmallCard  color={dash.color}
                    titulo={dash.titulo}
                    icono={dash.icono}
                    valor={this.state.usersCount['count']}
                    
                     /> 
                 )}      
            </div>
            </React.Fragment>
        )
       }

    }