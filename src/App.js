import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import OrdersUpdate from './components/OrdersUpdate'
import OrdersRegister from './components/OrdersRegister'
import Header from './templates/Header'


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/' exact render ={ props => ( <Login {...props} />)}></Route>
          <Route path='/signup' exact render ={ props => ( <SignUp {...props} /> )}></Route>
          <Route path='/dashboard' exact render ={ props => (< Dashboard {...props} />)}></Route>
          <Route path='/ordersupdate/:id' exact render={ props => ( <OrdersUpdate {...props} />)}></Route>
          <Route path='/ordersregister' exact render={ props => ( <OrdersRegister {...props}/> )}></Route>    
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
