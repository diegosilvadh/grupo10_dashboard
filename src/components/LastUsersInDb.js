import React, { Component } from 'react';
import LastUser from './LastUser';

const API_USER = 'http://localhost:3000/api/users/last';

export default class LastUsersInDb extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
            lastUser: [],
        }
    }


    componentDidMount() {
        console.log("Monto Last User")
        fetch(API_USER)
        .then(res =>{
            return res.json()

        })

        .then(users =>{
           this.setState({ lastUser: users.results,
        })
         })

        .catch(error => console.log(error))
        }
        render() {
            const dash  = this.state;
            console.log(this.state)
            return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                <div>
                { dash && (
                        <LastUser  username={ this.state.lastUser['username'] }
                                   id={ this.state.lastUser['id'] }
                                   first_name={ this.state.lastUser['first_name'] }
                                   last_name={ this.state.lastUser['last_name'] }
                                   birthday={ this.state.lastUser['birthday'] }
                                   email={ this.state.lastUser['email'] }
                                   avatar={ this.state.lastUser['avatar'] }
                                   id_rol={ this.state.lastUser['id_rol'] }


                        />
                 )}  
                 </div>
            </div>
            </React.Fragment>
        )
       }
    }