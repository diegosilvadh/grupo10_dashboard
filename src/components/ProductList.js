import React from 'react';

function ProductList(props){
    return(
        <React.Fragment>
									<tbody>
										<tr>
											<td>{props.id}</td>
											<td>{props.name}</td>
											<td>{props.price}</td>
											<td>{props.discountValue}</td>
                                            <td>{props.category}</td>
											<td>{props.description}</td>
										</tr>
									</tbody>
        </React.Fragment>
    )
}
export default ProductList;