import React from 'react';

import CategoriesInDb from './CategoriesInDb';
import ContentRowDonas from './ContentRowDonas';
import LastUsersInDb from './LastUsersInDb';
function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Donas Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Donas-->*/}
					<ContentRowDonas />
					{/*<!-- End donas in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Donas in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Dona in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último Usuario Dona</h5>
								</div>
								<div className="card-body">
										<LastUsersInDb />
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="http://localhost:3000">Ir a comprar Donas</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last Dona in Data Base -->*/}

						{/*<!-- Categories in DB -->*/}
						<CategoriesInDb />

						{/*<!--End Categories In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;