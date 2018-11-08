import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AdminLayout, MainLayout } from '/imports/startup'
import Navbar from '/imports/components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

/*
    Base de l'application
    Appele le bon layout en fonction des routes spécifiées.
    Si l'url commence par /admin, alors AdminLayout prend le relai
    sinon MainLayout prend le relai
*/

export default class App extends Component{

    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route component={AdminLayout} path="/admin" />
                            <Route component={MainLayout} path="/" />
                        </Switch>
                    </div>
                </Router>
                <ToastContainer />
            </div>
        )
    }
}