import axios from "axios";
import React from "react";


class SignUp extends React.Component{

    state={
        form:{

            "nombre":"",
            "apellido":"",
            "usuario":"",
            "password":""
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
        
    
    }
   handlerSignup=()=>{
    let url= 'http://localhost:3004/users'
    axios.post(url,this.state.form)
    .then( response =>{
        console.log(response)
    })
   }

    render(){

        return(
            <React.Fragment>
                <br></br>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card border-radius: 15px;">
                            <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                            <form>

                                <div className="form-outline mb-4">
                                <input type="text"  className="form-control form-control-lg" name="nombre" onChange={this.handlerOnChange} />
                                <label className="form-label" htmlFor="form3Example1cg">Tu nombre</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="text"  className="form-control form-control-lg" name="apellido" onChange={this.handlerOnChange} />
                                <label className="form-label" htmlFor="form3Example1cg">Tu apellido</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="email"  className="form-control form-control-lg" name="usuario" onChange={this.handlerOnChange}/>
                                <label className="form-label" htmlFor="form3Example3cg">Tu Email</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="password"  className="form-control form-control-lg" name="password" onChange={this.handlerOnChange}/>
                                <label className="form-label" htmlFor="form3Example4cg">Constraseña</label>
                                </div>

                                <div className="d-flex justify-content-center">
                                <button type="button"
                                    className="btn btn-dark btn-lg padding-left: 2.5rem; padding-right: 2.5rem;" onClick={this.handlerSignup}>Registrarse</button>
                                </div>

                                <p className="text-center text-muted mt-5 mb-0">¿Ya tienes una cuenta? <a href="#!"
                                    className="fw-bold text-body"><u>Inicia sesión aquí</u></a></p>

                            </form>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SignUp;