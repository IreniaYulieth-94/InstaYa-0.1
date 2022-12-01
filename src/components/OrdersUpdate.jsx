import axios from "axios";
import React from "react";
import { apiUrl } from "../mocks/apirest";

class OrdersUpdate extends React.Component{

    state={
        form:{
            "id": "",
            "fecha": "",
            "hora":"",
            "estado": "",
            "direccionRecogida":"",
            "ciudadRecogida":"",
            "nombreDestinatario":"",
            "cedulaDestinatario":"",
            "direcciónEntrega": "",
            "ciudadEntrega":"",
            "largo":"",
            "alto":"",
            "ancho":"",
            "peso":""
        },
        error:false,
        errorMsg:""
    }

    handlerOnChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
        //console.log(this.state.form);
    }

    handlerSubmit=e=>{
        e.preventDefault();
    }

    methodPut=()=>{
        let url= apiUrl + "services";
        axios.put(url, this.state.form)
        .then(response=>{
            console.log(response)

        })
    }

    delete =()=>{
        let url=apiUrl + "services";
        let serviceId = this.props.match.params.id;
        let data ={
            "id":serviceId,
        }
        axios.delete(url,{header:data})
        .then(response=>{
            this.props.history.push("/dashboard");
        })
    }

    componentDidMount(){
        let serviceId = this.props.match.params.id;
        let url = apiUrl + "services?id=" + serviceId;
        axios.get(url)
        .then(response =>{
            this.setState({
                form:{
                    id:serviceId,
                    fecha:response.data[0].fecha ,
                    hora:response.data[0].hora,
                    estado:response.data[0].estado ,
                    direccionRecogida:response.data[0].direccionRecogida,
                    ciudadRecogida:response.data[0].ciudadRecogida,
                    nombreDestinatario:response.data[0].nombreDestinatario,
                    cedulaDestinatario:response.data[0].cedulaDestinatario,
                    direcciónEntrega:response.data[0].direcciónEntrega,
                    ciudadEntrega:response.data[0].ciudadEntrega,
                    largo:response.data[0].largo,
                    alto:response.data[0].alto,
                    ancho:response.data[0].ancho,
                    peso:response.data[0].peso
                }
            })
        });
    }

    render(){ const form = this.state.form

        return(

            <React.Fragment>
                <br></br>
                <div className="container">
                    <h3>
                        Editar servicio número {form.id}
                    </h3>
                </div>
                <br></br>
                <div className="container">
                    <form className="row g-3 needs-validation" onSubmit={this.handlerSubmit}>
                        <div className="col-md-4">
                            <label className="form-label">Fecha</label>
                            <input type="date" className="form-control" name="fecha" value={form.fecha} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Hora</label>
                            <input type="time" className="form-control" name="hora" value={form.hora} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-3">
                            <label  className="form-label">Estado</label>
                            <select className="form-select" name="estado" value={form.estado} onChange={this.handlerOnChange}>
                            <option>Guardado</option>
                            <option>Cancelado</option>
                            <option>Completado</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Largo</label>
                            <input type="number" className="form-control" name="largo" value={form.largo} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Alto</label>
                            <input type="number" className="form-control" name="alto" value={form.alto} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Ancho</label>
                            <input type="number" className="form-control" name="ancho" value={form.ancho} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Peso</label>
                            <input type="number" className="form-control" name="peso" value={form.peso} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Dirección recogida</label>
                            <input type="text" className="form-control" name="direccionRecogida" value={form.direccionRecogida} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Ciudad recogida</label>
                            <input type="text" className="form-control" name="ciudadRecogida" value={form.ciudadRecogida} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Nombre destinatario</label>
                            <input type="text" className="form-control" name="nombreDestinatario" value={form.nombreDestinatario} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Cédula/Nit destinatario</label>
                            <input type="text" className="form-control" name="cedulaDestinatario" value={form.cedulaDestinatario} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Dirección entrega</label>
                            <input type="text" className="form-control" name="direcciónEntrega" value={form.direcciónEntrega} onChange={this.handlerOnChange}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Ciudad entrega</label>
                            <input type="text" className="form-control" name="ciudadEntrega" value={form.ciudadEntrega} onChange={this.handlerOnChange}/>
                        </div>
                        <br></br>
                        <div>
                            <button className="btn btn-dark" style={{marginRight:"10px"}} type="submit" onClick={()=>this.methodPut()}>Actualizar orden</button>
                            <button className="btn btn-dark" type="submit" onClick={()=>this.delete()}>Eliminar orden</button>
                        </div>
                    </form>
                </div>

            </React.Fragment>

        )
    }
}

export default OrdersUpdate;