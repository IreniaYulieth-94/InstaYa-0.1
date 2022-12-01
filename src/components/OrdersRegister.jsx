import React from "react";


class OrdersRegister extends React.Component{

    render(){
        return(

            <React.Fragment>
                <br></br>
                <div className="container">
                    <h3>
                        Crear nuevo servicio 
                    </h3>
                </div>
                <br></br>
                <div className="container">
                    <form className="row g-3 needs-validation" >
                        <div className="col-md-4">
                            <label className="form-label">Fecha</label>
                            <input type="date" className="form-control" name="fecha" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Hora</label>
                            <input type="time" className="form-control" name="hora"/>
                        </div>
                        <div className="col-md-3">
                            <label  className="form-label">Estado</label>
                            <select className="form-select" name="estado">
                            <option>Guardado</option>
                            <option>Cancelado</option>
                            <option>Completado</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Largo</label>
                            <input type="number" className="form-control" name="largo"/>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Alto</label>
                            <input type="number" className="form-control" name="alto" />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Ancho</label>
                            <input type="number" className="form-control" name="ancho"/>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Peso</label>
                            <input type="number" className="form-control" name="peso" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Dirección recogida</label>
                            <input type="text" className="form-control" name="direccionRecogida"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Ciudad recogida</label>
                            <input type="text" className="form-control" name="ciudadRecogida" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Nombre destinatario</label>
                            <input type="text" className="form-control" name="nombreDestinatario"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Cédula/Nit destinatario</label>
                            <input type="text" className="form-control" name="cedulaDestinatario" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Dirección entrega</label>
                            <input type="text" className="form-control" name="direcciónEntrega" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Ciudad entrega</label>
                            <input type="text" className="form-control" name="ciudadEntrega" />
                        </div>
                        <br></br>
                        <div>
                            <button className="btn btn-dark" style={{marginRight:"10px"}} type="submit">Crear orden</button>
                        </div>
                    </form>
                </div>
 
                            
            </React.Fragment>
        );
    }
}

export default OrdersRegister;