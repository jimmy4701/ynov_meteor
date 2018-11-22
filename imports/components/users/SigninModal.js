import React, { Component } from 'react'
import styled from 'styled-components'
import { SigninForm } from '/imports/components'
import { Modal, Button, Image } from 'semantic-ui-react'

export default class SigninModal extends Component {
    state = {

    }

    render(){
        return(
            <Modal open={this.props.open} onClose={this.props.onClose}>
                <Modal.Header>Connexion</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='/images/timeline.svg' />
                    <Modal.Description>
                        <SigninForm onSignin={this.props.onClose}/>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}