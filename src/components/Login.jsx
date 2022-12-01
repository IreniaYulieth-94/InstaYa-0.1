import React from "react";  //LLamar librería React
//CSS
import '../assets/css/login.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const apiUrl = ' http://localhost:3004/users';
const cookies = new Cookies();

class Login extends React.Component{    //Crear clase que hereda de Componente de React
    //state siempre es un array
    state = {
        form:{
            "usuario": "",
            "password": ""
        },
        error: false,
        errorMsg:""
    }

    /* Forma 1.
    handlerSubmit(e){
        e.preventDefault();
    }
    */
    // Forma 2.
    handlerSubmit=e=>{
        e.preventDefault();
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

    /*handlerButton(){
        console.log("enviado");
    }*/

    iniciarSesion= async ()=>{
        await axios.get(apiUrl, {params:{usuario:this.state.form.usuario, password:md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if (response.length>0){
                var respuesta = response[0];
                cookies.set('id', respuesta.id, {path:"/"});
                cookies.set('usuario', respuesta.usuario, {path:"/"});
                cookies.set('nombre', respuesta.nombre, {path:"/"});
                cookies.set('apellido', respuesta.apellido, {path:"/"});
                alert(`Bienvenido/a ${respuesta.nombre} ${respuesta.apellido}`);
                window.location.href="./dashboard"
            }else{
                alert('El usuario o contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    render(){

        return(
            <React.Fragment>

                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={this.handlerSubmit}>
                                <div className="form-outline mb-4">
                                    <input type="email" name="usuario" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" id="inputEmail" onChange={this.handlerOnChange}/>
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input type="password" name="password" className="form-control form-control-lg"
                                    placeholder="Enter password" id="inputPassword" onChange={this.handlerOnChange}/>
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-dark btn-lg padding-left: 2.5rem; padding-right: 2.5rem;" onClick={this.iniciarSesion}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                                        className="link-danger">Register</a></p>
                                </div>

                            </form>
                        </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>    
            
        );

    }

}   

export default Login;