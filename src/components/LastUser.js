import React from 'react';
import imagenFondo from '../assets/images/homero-Dona.png';

function LastUser(props){
    return(
        <React.Fragment>
            <div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.avatar} alt={props.username} />
			</div>
                <p>Id: {props.id}</p>
                <p>Nombre: {props.first_name}</p>
                <p>Apellido: {props.last_name}</p>
                <p>Username: {props.username}</p>
                <p>Fecha de Nacimiento: {props.birthday}</p>
                <p>Correo Electrónico: {props.email}</p>
                <p>Id Rol: {props.id_rol}</p>
        </React.Fragment>
    )
}
export default LastUser;