import React from 'react';
import CountUsersInDb from './CountUsersInDb';
import CountCategoriesInDb from './CountCategoriesInDb';
import CountProductsInDb from './CountProductsInDb';


function ContentRowTop(){
    return (
        <React.Fragment>
        
                                <CountUsersInDb />
                                <CountProductsInDb />
                                <CountCategoriesInDb />
    
            
        {/*<!-- Content Row
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>  -->*/}
        </React.Fragment>
    )
}
export default ContentRowTop;