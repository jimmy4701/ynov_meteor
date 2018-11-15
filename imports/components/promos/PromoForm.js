import React, {Component} from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { toast } from 'react-toastify'

export default class PromoForm extends Component{
    state = {
        promo: {}
    }

    handleChange = (event, {name, value}) => {
        let {promo} = this.state
        promo[name] = value
        this.setState({promo})
    }

    submitPromo = (e) => {
        e.preventDefault()
        const {promo} = this.state
        Meteor.call('promos.insert', promo, (error, result) => {
            if(error){
                console.log(error.message)
                toast.error(error.reason)
            }else{
                toast.success("Promo créée !")
            }
        } )
    }



    render(){
        const {promo} = this.state
        return(
            <Form onSubmit={this.submitPromo}>
                <Form.Input
                    label='Nom de la promo'
                    onChange={this.handleChange}
                    value={promo.name}
                    name='name'
                    required
                />
                <TextArea
                    onChange={this.handleChange}
                    name="comment"
                    value={promo.comment}
                    placeholder="Commentez la promo"
                />
            </Form>
        )
    }
}