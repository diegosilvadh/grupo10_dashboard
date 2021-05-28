import React, { Component } from 'react';
import SmallCard from './SmallCard';

const API_CATEGORY = 'http://localhost:3000/api/categories';

export default class CountCategoriesInDb extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            categoriesCount: [],
            color: "success",
            titulo: "Categorias en la Base de Datos",
            icono: "fas fa-server",
        }
    }

    componentDidMount() {
        console.log("Monto")
        fetch(API_CATEGORY)
        .then(res =>{
            return res.json()

        })

        .then(categories =>{
           this.setState({categoriesCount: categories.meta})
           console.log(categories.meta)
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
                    valor={this.state.categoriesCount['count']}
                    
                     /> 
                 )}      
            </div>
            </React.Fragment>
        )
       }
    }