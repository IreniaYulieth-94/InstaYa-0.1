import React from "react";
import axios from 'axios';
import { apiUrl } from "../mocks/apirest";


class Dashboard extends React.Component {

    state={
        services:[]
    }

    clickService(id){
        this.props.history.push("/ordersupdate/" + id);
    }

    componentDidMount(){
        let url = apiUrl + "services";
        axios.get(url)
        .then(response=>{
            this.setState({
                services:response.data
            });
        });
    };

    
    render(){

        return(
            <React.Fragment>
                <br></br>
                <div className="container">
                    <h3>
                        Listado de órdenes
                    </h3>
                </div>
                <br></br>
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col"># Servicio</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Ciudad de entrega</th>
                            <th scope="col">Dirección de entrega</th>
                            <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.services.map( (value, index)=>{
                                return(
                                    <tr key={index} onClick ={()=>this.clickService(value.id)}>
                                        <td>{value.id}</td>
                                        <td>{value.fecha}</td>
                                        <td>{value.ciudadEntrega}</td>
                                        <td>{value.direcciónEntrega}</td>
                                        <td>{value.estado}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                    <div>
                        <a className="btn btn-dark" href="/ordersregister"> Crear nueva orden</a>
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default Dashboard;