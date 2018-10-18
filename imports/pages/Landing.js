import React, { Component } from 'react'
import Navbar from '/imports/components/Navbar'


export default class Landing extends Component {
    state = {

    }

    render(){
        return(
            <div>
                <Navbar color="red" forceTitle="SUPER !" onClick={} onMouseHover={} height="10em" />
                <Navbar color="#de12d5" />
                <p>LANDING</p>
            </div>
        )
    }

}

