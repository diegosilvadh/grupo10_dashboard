import React, {Component} from 'react';
import ProductList from './ProductList';
const API_PRODUCT = 'http://localhost:3000/api/products';


export default class Product extends Component{
	constructor(props) {
        super(props)
        
        this.state ={
            productsList : [],
        }
    }
	componentDidMount() {
        console.log("Monto")
        fetch(API_PRODUCT)
        .then(res =>{
            return res.json()
        })

        .then(products =>{
           this.setState({productsList: products.results})
         })

        .catch(error => console.log(error))
        } 

	render(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Productos En Base de Datos</h1>
					           {/*<!-- DataTales Example -->*/}
							   <div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Descuento</th>
                                            <th>Categoría</th>
                                            <th>Descripción</th>
										</tr>
									</thead>
									{
                                    this.state.productsList.map((product,index)=>{
                                        return  <ProductList  {...product}  key={index} />
                                    })
                                }
								</table>
							</div>
						</div>
					</div>      
					
        </React.Fragment>
    )
	}
}