import React, { Component } from 'react';
import Category  from './Category';
const API_CATEGORY = 'http://localhost:3000/api/categories'

export default class CategoriesInDb extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            categoriesList : [],
        }
    }


    componentDidMount() {
        console.log("Monto")
        fetch(API_CATEGORY)
        .then(res =>{
            return res.json()
        })

        .then(categories =>{
           this.setState({categoriesList: categories.results})
         })

        .catch(error => console.log(error))
        } 

    render() {
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorias de Donas</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                            {
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )
   }
}