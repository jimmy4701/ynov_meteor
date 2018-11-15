import React, {Component} from 'react'
import { PromoForm } from '/imports/components'
import { Container } from 'semantic-ui-react'

export default class AdminPromos extends Component {

    render(){
        return(
            <Container>
                <PromoForm />
            </Container>
        )
    }
}