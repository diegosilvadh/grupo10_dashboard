import React, { Component } from 'react';
import User  from './User';
const API_USER = 'http://localhost:3000/api/users'

export default class UsersInDb extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            usersList : [],
            usersCount: 0,
        }
    }


    componentDidMount() {
        console.log("Monto")
        fetch(API_USER)
        .then(res =>{
            return res.json()
        })

        .then(users =>{
           this.setState({usersList: users.results})
           this.setState({usersCount: users.meta})
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
                            <h6 className="m-0 font-weight-bold text-gray-800">Users in Data Base</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                            {
                                    this.state.usersList.map((user,index)=>{
                                        return  <User  {...user}  key={index} />
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