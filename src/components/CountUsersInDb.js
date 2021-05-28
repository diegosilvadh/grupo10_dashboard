import React, { Component } from 'react';
import SmallCard from './SmallCard';

const API_USER = 'http://localhost:3000/api/users';

export default class CountUsersInDb extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            usersCount: [],
            colorUser: "primary",
            tituloUser: "Usuarios en la Base de Datos",
            iconoUser: "fas fa-user",
            productsCount: [],
            color: "primary",
            titulo: "Usuarios en la Base de Datos",
            icono: "fas fa-user",
        }
    }


    componentDidMount() {
        console.log("Monto")
        fetch(API_USER)
        .then(res =>{
            return res.json()

        })

        .then(users =>{
           this.setState({usersCount: users.meta})
           console.log(users.meta)
         })

        .catch(error => console.log(error))
        }
        render() {
            const dash  = this.state;
            console.log(this.state)
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