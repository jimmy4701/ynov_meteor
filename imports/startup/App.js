import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AdminLayout, MainLayout } from '/imports/startup'
import Navbar from '/imports/components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


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