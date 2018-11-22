import React, { Component } from 'react'
import styled from 'styled-components'
import { SigninForm } from '/imports/components'
import { Modal, Button, Image } from 'semantic-ui-react'

export default class SigninModal extends Component {
    state = {

    }

    render(){
        return(
            <Modal open={<Button>Connexion</Button>}>
                <Modal.Header>Connexion</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='/images/timeline.svg' />
                    <Modal.Description>
                        <SigninForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}