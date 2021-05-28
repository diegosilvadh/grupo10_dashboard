import React from 'react';

class User extends React.Component{
    
    constructor(props) {
        super(props)

        this.state = { active: false}
    }

    fondoCajaIn = () => {
        this.setState({active: true})
    } 

    fondoCajaOut = () => {
        this.setState({active: false})
    } 
    
    render() {
        return(
            <div onMouseOver = { this.fondoCajaIn } onMouseLeave ={this.fondoCajaOut} className="col-lg-6 mb-4">
                <div className="card text-white bg-dark shadow">
                    <div className={`card-body ${this.state.active && "bg-secondary"}`}>
                        {this.props.username}
                    </div>
                </div>
            </div>
    )
    }

}
export default User;