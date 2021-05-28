import React from 'react';

function ProductList(props){
    return(
        <React.Fragment>
									<tbody>
										<tr>
											<td>{props.id_product}</td>
											<td>{props.name}</td>
											<td>{props.price}</td>
											<td>{props.discount_value}</td>
                                            <td>{props.id_category}</td>
											<td>{props.description}</td>
										</tr>
									</tbody>
        </React.Fragment>
    )
}
export default ProductList;